import React from 'react'
import styled from 'styled-components'

const NoHouseholdNote = () => {
    return (
        <StyledWrapper>
            <p>You are not a member of a household yet.</p>
            <button class='button is-info mt-3' >Create one</button>
        </StyledWrapper>
    )
}

export default NoHouseholdNote


const StyledWrapper = styled.div`

    width: 100%;
    height: 100%;
    background: #fff;
    position: absolute;
    top:0px;
    left:0px;
    z-index:9;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`