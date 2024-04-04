import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, createBrowserRouter , RouterProvider } from "react-router-dom";

// import { BrowserRouter } from 'react-router-dom';
import './css/Main.css'
import './css/Fonts.css'
import First from './pages/First/First';
import AdCreating from './pages/AdCreating/AdCreating';
import FirstDetails from './components/First/FirstDetails/FirstDetails';

const router = createBrowserRouter ([
  {
    path : '/',
    element :  <App /> 
  }
])

ReactDOM.render(
        <App />,

    document.getElementById('root')
);


