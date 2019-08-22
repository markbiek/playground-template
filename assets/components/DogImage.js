import React, {useEffect} from 'react';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';

import store from '../store';

import {
    dogSetImage,
    loadDogImage,
} from '../modules/Dog/actions';

const { dispatch } = store;

function DogImage({image}) {
    const refresh = async () => {
        const resp = await loadDogImage();
        const url = resp.data.url;

        dispatch(dogSetImage(url));
    }

    useEffect(() => {
        if (!image) {
            refresh();
        }
    })

    if (image == null) {
        return null;
    }

    console.log('woot');

    return (
        <img src={image} alt="A dog" width="320" />
    );
}

const mapStateToProps = function (store) {
    return {
        image: store.dogState.get('image'),
    }
};

export default connect(mapStateToProps)(DogImage);
