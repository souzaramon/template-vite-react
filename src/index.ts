import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'

let root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
let rootComponent = React.createElement(React.StrictMode, {}, React.createElement(App, {}));

root.render(rootComponent);
