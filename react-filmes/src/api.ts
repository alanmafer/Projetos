import axios from 'axios';

/* Utilizando Fetch
const BASE = 'https://jsonplaceholder.typicode.com';*/

const http = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

export const api = {
    getAllPosts: async () => {
        // Utilizando AXIOS
        let response = await http.get(`/posts`);
        return response.data;

        // Utilizando Fetch
        /* let response = await fetch(`${BASE}/posts`);
        let json = await response.json();
        return json; */
    },
    addNewPosts: async (title: string, body: string, userId: number) => {     
        // Utilizanod AXIOS   
        let response = await http.post(`/posts`, {
            title, body, userId
        });
        return response.data

        /* Utilizando Fetch
        let response = await fetch(`${BASE}/posts`, {
            method: 'POST',
            body: JSON.stringify({title, body, userId}),
            headers: {'Content-Type' : 'application/json'}
        });
        let json = await response.json();
        return json; */
    },
}