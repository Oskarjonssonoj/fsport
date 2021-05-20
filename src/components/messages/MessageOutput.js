import React, { useEffect } from 'react'
import './styles/messageoutput.scss'
import moment from 'moment';

const MessageOutput = ({message}) => {

    useEffect(() => {
        if(message?.state === 1) {
            message.state = 0
        }
    }, [message])

    return (
        <div className="output-section">
            {
                message &&
                <>
                    <div className="output-title">
                        <h2>{message.title}</h2>
                        <div>
                            <p>{message.email}</p>
                            <p>{moment.unix(message.timestamp/1000).format("DD MMM YYYY hh:mm a")}</p>
                        </div>
                    </div>

                    <div className="output-body">
                        <p>{message.body}</p>
                    </div>
                </>
            }
        </div>
    )
}

export default MessageOutput
