import React from 'react'
import {Route, Redirect} from 'react-router-dom'

import {useAuth} from '../contexts'

const PrivateRoute = ({component: Component, ...rest}) => {

    const {user, loading} = useAuth()
    
    
    return (
        <Route 
            {...rest}
            render={(props) => 
                !user && !loading ? (
                    <Redirect to="/login" />
                ) : (
                    <Component {...props} />
                )
            }
        />
    )
}

export default PrivateRoute
