import React from 'react';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';

import store from '../store';

import {
    dogSetImage,
    loadDogImage,
} from '../modules/Dog/actions';

const { dispatch } = store;

class DogImage extends React.Component {
    componentWillMount() {
        this.refresh();
    }

    async refresh() {
        const resp = await loadDogImage();
        const url = resp.data.url;

        dispatch(dogSetImage(url));
    }

    render() {
        const { image } = this.props;

        if (image == null) {
            return null;
        }

        return (
            <img src={image} alt="A dog" width="320" />
        );
    }
}

const mapStateToProps = function (store) {
    return {
        image: store.dogState.get('image'),
    }
};

export default connect(mapStateToProps)(DogImage);
