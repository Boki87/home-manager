import React, {useState} from 'react'
import styled from 'styled-components'

import {useAuth} from '../../contexts'

const Signin = () => {

    const {userSignin, loading} = useAuth()
    

    const [email, setEmail] = useState('test@mail.com')
    const [password, setPassword] = useState('test123')

    const signinHandler = (e) => {
        e.preventDefault()
        if(email.trim() !== '' && password.trim() !== '') {
            userSignin(email, password)
        }
    }

    return (
        
            <div className="card">        
                <h1 className='has-text-centered has-text-weight-bold is-size-3'>Sign in</h1>      
                <hr />  
                <form onSubmit={signinHandler}>
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
                    <button className={`button is-primary is-block mx-auto ${loading ? 'is-loading' : ''}`}>Submit</button>
                </form>
            </div>
        
    )
}

export default Signin
