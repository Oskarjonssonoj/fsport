import React, { useState, useEffect, useRef, useMemo } from 'react'
import Message from './Message.js'
import './styles/messages.scss'
import MessagesInfo from '../../data/messages.json'
import MessageOutput from './MessageOutput.js'

const Messages = () => {

    const sortedMessages = MessagesInfo.messages.sort((a, b) => {return b.state > a.state});

    const [message, setMessage] = useState(null)
    const [messages, setMessages] = useState('')
    const queryRef = useRef();

    const messagesSearch = useMemo(() => {
        if(!messages)
            return sortedMessages

        return sortedMessages.filter( user => {
            return user.title.toLowerCase().includes( messages.toLowerCase() )
        })
    }, [messages, sortedMessages])

    useEffect(() => {
        queryRef.current.focus();
    }, [])

    const openMessage = () => {
        console.log("hej")
    }

    return (
        <div className="inbox-and-messages">
            <div className="messages-section">
                <div className="search-field">
                    <input 
                        className="search" 
                        type="search" 
                        value={messages}
                        onChange={e => setMessages(e.target.value)}
                        placeholder="Sök efter titel på meddelande..." 
                        ref={queryRef}  
                        />
                    <i className="fas fa-search fa-2x"></i>
                </div>

                {
                    messagesSearch.map(message => {
                        return <Message message={message} setMessage={setMessage}/>
                    })
                }
            </div>

            <div className="message-output-section">
                <MessageOutput message={message}/>
            </div>
        </div>
    )
}

export default Messages
