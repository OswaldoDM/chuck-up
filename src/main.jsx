import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { ChuckApp } from './ChuckApp.jsx'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
    
    <BrowserRouter basename={import.meta.env.DEV ? '/' : '/chuck-jokes-app/'} >      
        <ChuckApp />
    </BrowserRouter> 
);
  
    

