import axios from 'axios';

const $ = jQuery;

export const DOG_SET_IMAGE = 'DOG_SET_IMAGE';

export const dogSetImage = image => ({
    type: DOG_SET_IMAGE,
    image
});

export const loadDogImage = () => {
    const url = 'https://random.dog/woof.json';

    return axios(url);
};
