import React from 'react';
import PropTypes from 'prop-types';

const DogImage = ({ image, refresh }) => {
    if (image == null) {
        return null;
    }

    return (
        <>
            <a href='#' onClick={refresh}>
                [refresh]
            </a>
            <br />
            <img src={image} alt='A dog' width='320' />
        </>
    );
};

DogImage.propTypes = {
    image: PropTypes.string.isRequired,
    refresh: PropTypes.func.isRequired,
};

export default DogImage;
