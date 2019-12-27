import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://hw-b2914.firebaseio.com/'
});

export default instance;