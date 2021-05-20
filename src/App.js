import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom'
import './assets/styles/app.scss'
import HomePage from './views/HomePage';

function App() {
  return (
    <div className="App">

    	<BrowserRouter>
          <div className="main-app-page">
            
            <Route path="/" component={HomePage} />

          </div>
        </BrowserRouter>
      
    </div>
  );
}

export default App;
