import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';

// Routers
import MainRouter from './MainRouter';

const element = <MainRouter />
const root = document.getElementById('root')

ReactDOM.render(element, root);

