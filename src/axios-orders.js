import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://react-my-burger-2ab33-default-rtdb.firebaseio.com/'
});

export default instance