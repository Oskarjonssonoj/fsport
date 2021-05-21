import React from 'react'
import { NavLink } from 'react-router-dom';
import moment from 'moment';

const Message = ({message, setEachMessage, eachMessage, mark, checked, index}) => {
    return (
        <div className={eachMessage?.id === message?.id ? "message-box active-message" : "message-box"}>
            <div className="message-title">
                <h4>{message.title}</h4>
                <div className={checked && checked.includes(message.id) ? "checkbox checked" : "checkbox"} id={message.state === 1 ? 'active' : 'inactive'} onClick={() => mark(message, index)}/>
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
