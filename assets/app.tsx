import React from 'react';
import { render } from 'react-dom';

import App from './components/App';

let app = document.getElementById('app');
if (app) {
    render(<App />, app);
}
