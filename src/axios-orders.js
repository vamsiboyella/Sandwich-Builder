import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-vamsi-burger.firebaseio.com/'
});

export default instance;