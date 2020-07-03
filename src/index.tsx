import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import 'bootswatch/dist/darkly/bootstrap.min.css';

// Note: I have removed <React.StrictMode> because in this mode, components
// with hooks are intentionally rendered twice in debug mode.
// See https://github.com/facebook/react/issues/15074.
ReactDOM.render(<App />, document.getElementById('root'));
