import React, { useState, useEffect } from 'react';

import { loadDogImage } from '../modules/Dog/actions';

import DogImage from './DogImage';

const App = () => {
    const [image, setImage] = useState(null);

    useEffect(() => {
        if (!image) {
            refresh();
        }
    }, [image]);

    const refresh = async (e = null) => {
        if (e) {
            e.preventDefault();
        }

        const resp = await loadDogImage();

        setImage(resp.data.url);
    };

    return (
        <>
            <p>Doggy 👇</p>
            <DogImage image={image} refresh={refresh} />
        </>
    );
};

export default App;
