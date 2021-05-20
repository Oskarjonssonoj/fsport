import React from 'react'
import { NavLink } from 'react-router-dom';
import moment from 'moment';

const Message = ({message, setEachMessage}) => {
    return (
        <div className="message-box">
            <div className="message-title">
                <h4>{message.title}</h4>
                <div className="checkbox" id={message.state === 1 ? 'active' : 'inactive'}/>
            </div>
            <div className="message-body" onClick={() => setEachMessage(message)}>
                <p className="message-text">{message.body}</p>
                <p className="message-time">{moment.unix(message.timestamp/1000).format("DD MMM YYYY hh:mm a")}</p>
            </div>

            <NavLink
                onClick={() => setEachMessage(message)} 
                className="message-body-tablet-mobile"
                exact to={{ 
                    pathname: `/messages/${message.id}`,
                }}

                >
                <p className="message-text">{message.body}</p>
                <p className="message-time">{moment.unix(message.timestamp/1000).format("DD MMM YYYY hh:mm a")}</p>
            </NavLink>
        </div>
    )
}

export default Message
