import React from 'react';

const DogImage = ({image, refresh}) => {
    if (image == null) {
        return null;
    }

    return (
        <>
            <a href="#" onClick={refresh}>[refresh]</a><br />
            <img src={image} alt="A dog" width="320" />
        </>
    );
}

export default DogImage;
