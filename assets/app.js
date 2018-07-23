import React from 'react';
import { render } from 'react-dom';

const $ = jQuery;

import App from './components/App';

$(document).ready(() => {
    let app = document.getElementById('app');
    if (app) {
        render(<App />, app);
    }

    console.log('playground ready!');
});
