import React from 'react';
import { render } from 'react-dom';

import App from './components/App.tsx';

let app: Element = document.getElementById('app');
if (app) {
    render(<App />, app);
}
