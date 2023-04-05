import React from 'react';
import ReactDOMClient from 'react-dom/client';
import App from './App';

// new api update to react 18 now react-dom/client
// first target your container
// then create a root and call upon the container
// https://github.com/reactwg/react-18/discussions/5

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);

root.render(<App />, );
