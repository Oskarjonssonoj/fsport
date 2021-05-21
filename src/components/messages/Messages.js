import React, { useState, useMemo } from 'react'
import Message from './Message.js'
import './styles/messages.scss'
import MessagesInfo from '../../data/messages.json'
import MessageOutput from './MessageOutput.js'

const Messages = ({eachMessage, setEachMessage}) => {

    const sortedMessages = MessagesInfo.messages.sort((a, b) => {return b.state > a.state});
    
    const [messages, setMessages] = useState('')
    const [checked, setChecked] = useState([])

    const messagesSearch = useMemo(() => {
        if(!messages)
            return sortedMessages

        return sortedMessages.filter( user => {
            return user.title.toLowerCase().includes( messages.toLowerCase() )
        })
    }, [messages, sortedMessages])


    const markAMasg = (msg) => {
        if(checked.includes(msg.id)) {
            const remove = checked.filter(id => id !== msg.id)
            setChecked(remove)
        } else {
            setChecked([...checked, msg.id])
        }
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
                        />
                    <i className="fas fa-search fa-2x"></i>
                </div>

                {
                    messagesSearch.map((message, index) => {
                        return <Message message={message} setEachMessage={setEachMessage} mark={markAMasg} checked={checked} index={index}/>
                    })
                }
            </div>

            <div className="message-output-section">
                <MessageOutput message={eachMessage}/>
            </div>
        </div>
    )
}

export default Messages
