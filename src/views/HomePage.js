import React, { useState } from 'react'
import {Route} from 'react-router-dom'
import Header from '../components/layout/Header';
import MessageOutput from '../components/messages/MessageOutput';
import Messages from '../components/messages/Messages';

const HomePage = () => {

    return (
        <>
            <Header />

            <div className="content-section">
                <div className="component-content-section">

                    <Route path="/messages">
                        <Messages />
                    </Route>

                    <Route path="/message">
                        <MessageOutput />
                    </Route>

                </div>
            </div>        
        </>
    )
}

export default HomePage
