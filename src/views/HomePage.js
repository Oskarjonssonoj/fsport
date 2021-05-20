import React, { useState } from 'react'
import {Route} from 'react-router-dom'
import Header from '../components/layout/Header';
import MessageOutput from '../components/messages/MessageOutput';
import Messages from '../components/messages/Messages';

const HomePage = () => {

    const [eachMessage, setEachMessage] = useState(null)

    return (
        <>
            <Header />

            <div className="content-section">
                <div className="component-content-section">

                    <Route exact path="/messages">
                        <Messages eachMessage={eachMessage} setEachMessage={setEachMessage}/>
                    </Route>

                    <Route exact path="/messages/:id">
                        <MessageOutput message={eachMessage}/>
                    </Route>

                </div>
            </div>        
        </>
    )
}

export default HomePage
