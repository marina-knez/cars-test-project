import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import store from './Common/Utilities'

ReactDOM.render(<App store={store}/>, document.getElementById('root'));
