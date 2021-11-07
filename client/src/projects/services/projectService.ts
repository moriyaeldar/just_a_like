import axios from 'axios';
import React from 'react';
const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? '/api/project/'
    : 'http://localhost:8000/api/project/';
    
const client = axios.create({
    baseURL: "http://localhost:8000/api/project"
});

const getAllProjects = async () => {
    try {
        const resp = await client.get('/');
        return resp.data;
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
};

const getProjectById = async (projectId: any) => {
    try {
        const resp = await client.get(`/${projectId}`);
        return resp.data;
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
};

const createProject = async (project: any) => {
    try {
        const resp = await client.post(`/`, project);
        return resp.data;
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
};

const deleteProject = async (projectId: any) => {
    try {
        const resp = await client.delete(`/${projectId}`);
        return resp.data;
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
};

const updateProject = async (project: any) => {
    try {
        const resp = await client.put(`/${project._id}`, project);
        return resp.data;
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
};

export const projectService = {
    getAllProjects,
    getProjectById,
    createProject,
    deleteProject,
    updateProject
};