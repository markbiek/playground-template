import React, { useState, useEffect } from 'react';

import { loadDogImage } from '../modules/Dog/actions.ts';

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

        const url = await loadDogImage();

        setImage(url);
    };

    return (
        <>
            <p>Doggy 👇</p>
            {image ? <DogImage image={image} refresh={refresh} /> : null}
        </>
    );
};

export default App;
