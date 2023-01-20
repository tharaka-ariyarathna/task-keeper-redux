import React from "react" ;
import Reactdom from 'react-dom/client' ;
import {createStore} from 'redux'
import App from './App' ;

const root = Reactdom.createRoot(document.getElementById('root')) ;
root.render(
    <App />
)