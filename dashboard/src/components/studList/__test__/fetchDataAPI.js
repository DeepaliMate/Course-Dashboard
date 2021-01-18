import axios from 'axios';

export const API = "http://my-json-server.typicode.com/shripad-agashe/fake-api/students";

export const fetchData = async query => {
    const url = `${API}/search?query=${query}`;
    return await axios.get(url);
};

fetchData('react');