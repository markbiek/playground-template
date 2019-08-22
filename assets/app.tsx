import React from 'react';
import { render } from 'react-dom';

import App from './components/App';

function test(name: string) {
    console.log(`Hello ${name}`);
}

document.addEventListener('DOMContentLoaded', () => {
    test('Mark');

    let app = document.getElementById('app');
    if (app) {
        render(<App />, app);
    }

    console.log('playground ready!');
});
