import React from 'react'
import './styles/messageoutput.scss'

const MessageOutput = ({message}) => {
    return (
        <div className="output-section">
            {
                message &&
                <>
                    <h2>{message.title}</h2>
                    <p>{message.body}</p>
                </>
            }
        </div>
    )
}

export default MessageOutput
