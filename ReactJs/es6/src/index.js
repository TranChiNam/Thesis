import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import Global from './components/Global';
import registerServiceWorker from './registerServiceWorker';
// import '!style-loader!css-loader!bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.css';

// ReactDOM.render(<App />, document.getElementById('root'));


ReactDOM.render(<Global />, document.getElementById  ('root'));

registerServiceWorker();
