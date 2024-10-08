import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';  // Make sure App.js exists and is correctly named
import './content';  // Ensure this matches your content file (content.js)

const injectApp = () => {
  const root = document.createElement('div');
  root.id = 'linkedin-auto-connect-root';
  document.body.appendChild(root);

  ReactDOM.render(<App />, document.getElementById('linkedin-auto-connect-root'));
};

injectApp();
