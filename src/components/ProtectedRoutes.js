import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import styled from 'styled-components'


import Home from '../routes/home'
import Events from '../routes/events'
import Expenses from '../routes/expenses'
import Todo from '../routes/todo'
import Members from '../routes/members'

import FooterMobile from './FooterMobile'
import NoHouseholdNote from './NoHouseholdNote'

import {useAuth} from '../contexts'

const ProtectedRoutes = () => {

    const {user} = useAuth()

    return (
        <StyledWrapper>

                {user && user.householdId !== '' && <NoHouseholdNote />}

                <Router>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/events" component={Events}/>
                        <Route exact path="/expenses" component={Expenses}/>
                        <Route exact path="/todos" component={Todo}/>
                        <Route exact path="/members" component={Members}/>
                    </Switch>

                    <FooterMobile />

                </Router>            
        </StyledWrapper>
    )
}

export default ProtectedRoutes

const StyledWrapper = styled.div`

    width:100%;
    height:100%;
    background: #fff;

`