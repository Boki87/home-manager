import React, {useEffect, createContext, useReducer, useContext} from 'react'
import authReducer from './reducer'

import {useFirebase, useNotifications} from '../index'

import {
    SET_USER,
    SET_LOADING,
} from './types'

const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

const AuthProvider = ({children}) => {

    const {firebaseApp} = useFirebase()
    const db = firebaseApp.firestore()

    const {setNotification} = useNotifications()

    const initialState = {
        user: null,
        loading: false
    }

    const [state, dispatch] = useReducer(authReducer, initialState)

    useEffect(() => {
        firebaseApp.auth().onAuthStateChanged( user => {
            if(user) {                
                dispatch({
                    type: SET_USER,
                    payload: {...user}
                })
            }else{
                dispatch({
                    type: SET_USER,
                    payload: null
                })                
            }
            
        })
    }, [firebaseApp]) 


    const userSignin = async (email, password) => {
        dispatch({
            type: SET_LOADING,
            payload: true
        })
        try {

            await firebaseApp.auth().signInWithEmailAndPassword(email,password) //signin user      
            const uid = firebaseApp.auth().currentUser.uid //get uid from auth db


            //get actual user data from users db 
            db.collection('users').where("userId", "==", uid).get()
            .then((querySnapshot) => {
                let tempUser
                querySnapshot.forEach(function(doc) {
                    tempUser = doc.data()
                });
                dispatch({
                    type: SET_USER,
                    payload: {...tempUser}
                })
                
            })
            

            dispatch({
                type: SET_LOADING,
                payload: false
            })     
        } catch (error) {
            
            setNotification('Wrong username or password', 'error')

            dispatch({
                type: SET_LOADING,
                payload: false
            })     

        }
    }

    const userSignup = async (email, password) => {
        dispatch({
            type: SET_LOADING,
            payload: true
        })
        try {
            
            await firebaseApp.auth().createUserWithEmailAndPassword(email,password)       
            const uid = firebaseApp.auth().currentUser.uid
            

            const {id:userId} = await db.collection("users").add({
                userId: uid,
                email,
                name: '',
                householdId: '',
                household: '',
            })
            

            dispatch({
                type: SET_LOADING,
                payload: false
            })     
        } catch (error) {
            
            setNotification('Something went wrong, please try again', 'error')

            dispatch({
                type: SET_LOADING,
                payload: false
            })     

        }
    }


    return (
        <AuthContext.Provider value={{
            user: state.user,
            loading: state.loading,
            userSignin,
            userSignup,
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
