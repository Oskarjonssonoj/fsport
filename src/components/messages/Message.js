import React from 'react'
import moment from 'moment';

const Message = ({message}) => {
    return (
        <div className="message-box">
            <div className="message-title">
                <h4>{message.title}</h4>
                <div className="checkbox" id={message.state === 0 ? 'active' : 'inactive'}/>
            </div>
            <div className="message-body">
                <p className="message-text">{message.body}</p>
                <p className="message-time">{moment.unix(message.timestamp/1000).format("DD MMM YYYY hh:mm a")}</p>
            </div>
        </div>
    )
}

export default Message
