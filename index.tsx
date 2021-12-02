import * as React from 'react';
import { render } from 'react-dom';
import App from '@src/domains/app/app';

render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
);

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('sw.js');
    });
  }