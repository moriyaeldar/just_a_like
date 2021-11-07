import { FC } from 'react';
import { useState } from 'react';
import { projectService } from '../services/projectService';
import { useParams } from "react-router-dom";
// import Joi from 'joi';
// Joi.objectId = require('joi-objectid')(Joi);

const OneProject:FC = () => {
    const [project, setProject] = useState({
        name:"",
        projectManagers:[],
        status:0,
        tasks:[],
        team:0
    });
    const {id}: {id: string} = useParams(); 
    //Validate of project:
    // const schema = Joi.object({
    //     name: Joi.string(),
    //     projectManagers: Joi.array().item(Joi.objectId()).required(),
    //     status: Joi.number(),
    //     tasks: Joi.array().item(Joi.objectId()),
    //     team: Joi.objectId()
    //   });

    const handleClick = async () => {
        const oneProject = await projectService.getProjectById(id);
        setProject(oneProject);
    };
    
    return ( 
        <>
        <p>One Project</p>
        <button onClick={handleClick}>Get details project</button>
        <p>Name: {project.name}</p>
        <p>Project managers: {project.projectManagers}</p>
        <p>Tasks: {project.tasks}</p>
        <p>Status: {project.status}</p>
        <p>Tasks: {project.tasks}</p>
        </>
     );
  }
   
  export default OneProject;