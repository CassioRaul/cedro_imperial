
import axios from 'axios';

const baseURL = 'http://localhost:3000/users';

const axiosInstance = axios.create({
    baseURL,
});

const get = async (url) => {
    try {
        const response = await axiosInstance.get(url);
        return response.data;
    } catch (error) {
        console.error('Erro ao fazer requisição GET:', error);
        throw error;
    }
};

const post = async (url, data) => {
    try {
        const response = await axiosInstance.post(url, data);
        return response.data;
    } catch (error) {
        console.error('Erro ao fazer requisição POST:', error);
        throw error;
    }
};

export { get, post };