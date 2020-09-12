import React from 'react'
import styled from 'styled-components'
import {useNotifications} from '../../contexts'

const Notifications = () => {

    const {notifications, removeNotification} = useNotifications()

    const setType = (type) => {
        switch (type) {
            case 'error':
                return 'is-danger'
                break;
        
            case 'success':
                return 'is-primary'
                break;
        
            default:
                return 'is-info'
        }
    }

    return (
        <>
            {notifications.map( (notification, index) => 
                <StyledNotification index={index} key={index} className={`notification ${setType(notification.type)}`}>
                    <button className="delete" onClick={() => removeNotification(notification.id)}></button>
                    {notification.text}
                </StyledNotification>)
            }
        </>
        
    )
}

export default Notifications


const StyledNotification = styled.div`

    position: absolute;
    z-index: ${({index}) => index};
    top: 10px;
    right: 10px;
    max-width: calc(100% - 15px);

`
