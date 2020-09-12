import React from 'react'
import {useFirebase} from '../../contexts'

const Home = () => {

    const {firebaseApp} = useFirebase()

    const signOut = () => {
        firebaseApp.auth().signOut()
    }

    return (
        <div>
            Home 

            <button className='button is-info' onClick={signOut}>Sign out</button>
        </div>
    )
}

export default Home
