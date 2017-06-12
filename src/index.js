// import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import routes from './config/routes';
import './index.css';


ReactDOM.render(routes, document.getElementById('root'));
registerServiceWorker();
