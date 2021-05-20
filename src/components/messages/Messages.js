import React from 'react'
import Message from './Message.js'
import './styles/messages.scss'
import MessagesInfo from '../../data/messages.json'

const Messages = () => {

    console.log(MessagesInfo)
    return (
        <div className="messages-section">
            {
                MessagesInfo.messages.map(message => {
                    return <Message message={message}/>
                })
            }
        </div>
    )
}

export default Messages
