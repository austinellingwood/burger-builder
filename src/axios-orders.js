import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-f6a69.firebaseio.com/'
});

export default instance;