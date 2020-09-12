import React from 'react'
import styled from 'styled-components'

const AuthToggle = ({activeForm, setActiveForm}) => {
    return (
        <StyledWrapper>
            <div className="tabs is-toggle is-toggle-rounded">
                <ul>
                    <li className={`${activeForm == 'signin' ? 'is-active' : '' } }`}>
                    <a onClick={() => setActiveForm('signin')}>
                        <span className="icon is-small"><i className="fa fa-sign-in"></i></span>
                        <span>Sign in</span>
                    </a>
                    </li>
                    <li className={`${activeForm == 'signup' ? 'is-active' : '' } }`}>
                    <a onClick={() => setActiveForm('signup')}>
                        <span className="icon is-small"><i className="fa fa-user-plus"></i></span>
                        <span>Sign up</span>
                    </a>
                    </li>
                </ul>
            </div>
        </StyledWrapper>
    )
}

export default AuthToggle

const StyledWrapper = styled.div`

    position: absolute;
    bottom: 10px;
    display: flex;
    justify-content: center;

`