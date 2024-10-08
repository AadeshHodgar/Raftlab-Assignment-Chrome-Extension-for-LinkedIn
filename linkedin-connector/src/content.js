import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const injectApp = () => {
  const root = document.createElement('div');
  root.id = 'linkedin-auto-connect-root';
  document.body.appendChild(root);

  ReactDOM.render(<App />, document.getElementById('linkedin-auto-connect-root'));
};

injectApp();
