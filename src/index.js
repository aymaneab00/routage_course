import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// first : on utilise <browserRouter> </BrowserRouter/> au place de restrict mode 
// second : on utilise <Link to='/'> au place de a href 
//third : on utilise <Routes> <Route path = 'la meme en to 'element = {component}>  </Route> pour creer des routes 