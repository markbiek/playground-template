import axios from 'axios';

export const loadDogImage = () => {
    const url = 'https://random.dog/woof.json';

    return axios(url);
};
