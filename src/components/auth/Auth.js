import React, {useState} from 'react'
import styled from 'styled-components'

import Signin from './Signin'
import Signup from './Signup'
import AuthToggle from './AuthToggle'

const Auth = () => {

    const [activeForm, setActiveForm] = useState('signin')

    const toggleForm = (e) => {
        e.preventDefault()
        setActiveForm(activeForm == 'signin' ? 'signup' : 'signin')
    }

    return (
        <StyledWrapper>
            {activeForm == 'signin' ? <Signin/> : <Signup/> }     

            <AuthToggle activeForm={activeForm} setActiveForm={setActiveForm}/>
        </StyledWrapper>
    )
}

export default Auth

const StyledWrapper = styled.div`

    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
    .auth-form-toggle {
        position: absolute;
        bottom: 10px;
        left: 10px;
    }

    .card {
        width: 500px;
        padding: 20px;
        margin: 10px;
    }
`