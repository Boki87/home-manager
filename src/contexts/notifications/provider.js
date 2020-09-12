import React, {createContext, useContext, useState, useReducer } from 'react'
import {v4} from 'uuid'
import notificationReducer from './reducer'

import {
    SET_NOTIFICATION,
    REMOVE_NOTIFICATION
} from './types'

const NotificationsContext = createContext()

export const useNotifications = () => useContext(NotificationsContext)

const NotificationsProvider = ({children}) => {


    //notifications example
    /*

        [
            {
                id: 123,
                type: 'error', // error, success, info
                text: 'Some text'
            }
        ]

    */

    const initialState = []

    const [notifications, setNotifications] = useState([])

    const [state, dispatch] = useReducer(notificationReducer, initialState)
    

    const setNotification = (text, type = 'info', timeout = 5000) => {
        const id = v4()
        
        dispatch({
            type: SET_NOTIFICATION,
            payload: {
                id,
                type,
                text
            }
        })       

        
        setTimeout(() => {
            removeNotification(id)
        }, timeout)
        
    }
    
    const removeNotification = (id) => {
        
        dispatch({
            type: REMOVE_NOTIFICATION,
            payload: id
        })
    }

    return (
        <NotificationsContext.Provider value={{
            notifications: state,
            setNotification,
            removeNotification
        }}>
            {children}
        </NotificationsContext.Provider>
    )
}

export default NotificationsProvider
