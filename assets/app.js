import '@babel/polyfill';
import React from 'react';
import { render } from 'react-dom';

import App from './components/App';

document.addEventListener("DOMContentLoaded", () => {
    let app = document.getElementById('app');
    if (app) {
        render(<App />, app);
    }

    console.log('playground ready!');
});
