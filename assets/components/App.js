import React from 'react';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';

import { Button,
        Navbar,
        Nav,
        NavDropdown
} from 'react-bootstrap';

import store from '../store';

import DogImage from './DogImage';

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <>
                    <NavDropdown.Item>
                        Bob
                    </NavDropdown.Item>
                    <p>Doggy 👇</p>
                    <DogImage />
                </>
            </Provider>
        );
    }
}
