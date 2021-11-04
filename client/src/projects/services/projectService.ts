import axios from 'axios';
import React from 'react';

const client = axios.create({
    baseURL: "http://localhost:8000/project"
});


async function getAll(){
    return await client.get('/');
}

export default {
    getAll
}