import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

//OLD REACT 7 SYNTAX
//ReactDOM.render(<App />, document.getElementById('root'));

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(<App />);

