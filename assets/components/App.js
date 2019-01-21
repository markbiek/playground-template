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

        this.refresh = this.refresh.bind(this);
    }

    async refresh(e = null) {
        if (e) {
            e.preventDefault();
        }

        const resp = await loadDogImage();
        const url = resp.data.url;

        this.setState({
            image: url,
        });
    }

    componentDidMount() {
        this.refresh();
    }

    render() {
        const { image } = this.state;

        return (
            <>
                <p>Doggy 👇</p>
                <DogImage image={image} refresh={this.refresh} />
            </>
        );
    }
}
