import React from 'react'

import FirebaseProvider from './firebase/provider'
import AuthProvider from './auth/provider'
import NotificationsProvider from './notifications/provider'

import {useFirebase} from './firebase/provider'
import {useAuth} from './auth/provider'
import {useNotifications} from './notifications/provider'

export {
    useFirebase,
    useAuth,
    useNotifications
}

const CombinedContext = ({children}) => {
    return (
        <FirebaseProvider>
            <NotificationsProvider>
                <AuthProvider>
                    {children}
                </AuthProvider>
            </NotificationsProvider>
        </FirebaseProvider>
    )
}

export default CombinedContext
