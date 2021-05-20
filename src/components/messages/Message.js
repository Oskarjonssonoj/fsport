import React from 'react'
import moment from 'moment';

const Message = ({message, setMessage}) => {
    return (
        <div className="message-box">
            <div className="message-title">
                <h4>{message.title}</h4>
                <div className="checkbox" id={message.state === 1 ? 'active' : 'inactive'}/>
            </div>
            <div className="message-body" onClick={() => setMessage(message)}>
                <p className="message-text">{message.body}</p>
                <p className="message-time">{moment.unix(message.timestamp/1000).format("DD MMM YYYY hh:mm a")}</p>
            </div>
        </div>
    )
}

export default Message
