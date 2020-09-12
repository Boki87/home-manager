import React, {useEffect} from 'react'
import styled from 'styled-components'
import {Link, useLocation} from 'react-router-dom'

const navOptions = [
    {
        icon: 'fa fa-home',
        path: '/'
    },
    {
        icon: 'fa fa-calendar-o',
        path: '/events'
    },
    {
        icon: 'fa fa-credit-card',
        path: '/expenses'
    },
    {
        icon: 'fa fa-list-ul',
        path: '/todos'
    },
    {
        icon: 'fa fa-users',
        path: '/members'
    },
]


const FooterMobile = () => {
    
    const { pathname } = useLocation();
    
    function isActiveRoute(path) {
        if(path === pathname) {
            return 'has-text-link'
        }
    }

    return (
        <StyledWrapper>
            {navOptions.map(option => (
                <Link to={option.path} key={option.path}>
                    <div className={`footer-option ${isActiveRoute(option.path)}`}>
                        <i className={option.icon}></i>
                    </div>
                </Link>
            ))}                    
        </StyledWrapper>
    )
}

export default FooterMobile

const StyledWrapper = styled.div`

    width: 100%;
    height: 60px;
    position: absolute;
    bottom: 0px;
    left: 0px;
    background: #fff;
    box-shadow: 0px -3px 9px -1px rgba(0,0,0,0.5);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
    .footer-option {
        width: 50px;
        height: 50px;
        display: flex;
        font-size: 1.5rem;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        border-radius: 5px;
        margin: 0px 10px;
        color: #777;
    }
`