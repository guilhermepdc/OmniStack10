import axios from 'axios';

// coloque seu IP conforme mostra no acima do código de barras do Expo
// ex.: 'http://xx.xxx.xxx.xx:3333'
const api = axios.create({
    baseURL: 'http://10.150.243.84:3333',
});

export default api;