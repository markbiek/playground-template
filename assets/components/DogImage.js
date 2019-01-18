import React from 'react';

const DogImage = ({image}) => {
    if (image == null) {
        return null;
    }

    return (
        <img src={image} alt="A dog" width="320" />
    );
}

export default DogImage;
