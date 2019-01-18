import React from 'react';

import {
    loadDogImage,
} from '../modules/Dog/actions';

import DogImage from './DogImage';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            image: null
        };
    }

    async componentDidMount() {
        const resp = await loadDogImage();
        const url = resp.data.url;

        this.setState({
            image: url,
        });
    }

    render() {
        const { image } = this.state;

        return (
            <>
                <p>Doggy 👇</p>
                <DogImage image={image}/>
            </>
        );
    }
}
