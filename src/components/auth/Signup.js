import React, {useState} from 'react'
import styled from 'styled-components'

import {useAuth, useNotifications} from '../../contexts'

const Signup = () => {

    const {userSignup, loading} = useAuth()
    const {setNotification} = useNotifications()

    const [email, setEmail] = useState('test@mail.com')
    const [password, setPassword] = useState('test123')
    const [confirmPassword, setConfirmPassword] = useState('test123')


    const signupHandler = (e) => {
        e.preventDefault()
        if(email.trim() !== '' && password.trim() !== '' && confirmPassword.trim() !== '') {
            
            if(password.trim() === confirmPassword.trim()) {
                userSignup(email, password)
            }else{
                setNotification('Passwords don\'t match', 'error')
            }

        }
    }

    return (
        
            <div className="card">     
                <h1 className='has-text-centered has-text-weight-bold is-size-3'>Sign up</h1>                 
                <hr />
                <form onSubmit={signupHandler}>
                    <div className="field">
                        <label className="label">Email</label>
                        <div className="control">
                            <input 
                                className="input" 
                                type="text" 
                                placeholder="j.doe@email.com" 
                                required
                                value={email} 
                                onChange={(e) => {setEmail(e.target.value)}}
                            />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Password</label>
                        <div className="control">
                            <input 
                                className="input" 
                                type="password" 
                                placeholder="password" 
                                required
                                value={password} 
                                onChange={(e) => {setPassword(e.target.value)}}
                            />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Confirm Password</label>
                        <div className="control">
                            <input 
                                className="input" 
                                type="password" 
                                placeholder="password" 
                                required
                                value={confirmPassword} 
                                onChange={(e) => {setConfirmPassword(e.target.value)}}
                            />
                        </div>
                    </div>

                    <button className={`button is-primary is-block mx-auto ${loading ? 'is-loading' : ''}`}>Submit</button>
                </form>
            </div>
        
    )
}

export default Signup
