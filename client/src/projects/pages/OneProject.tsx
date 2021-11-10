import { FC, useEffect } from 'react';
import { useState } from 'react';
import { projectService } from '../services/projectService';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { loadproject } from '../store/project.actions';
// import Joi from 'joi';
// Joi.objectId = require('joi-objectid')(Joi);

const OneProject:FC = () => {
    const dispatch = useDispatch();
    const { project } = useSelector((state: any) => state.projectModule);
    const {id}: {id: string} = useParams(); 
    //Validate of project:
    // const schema = Joi.object({
    //     name: Joi.string(),
    //     projectManagers: Joi.array().item(Joi.objectId()).required(),
    //     status: Joi.number(),
    //     tasks: Joi.array().item(Joi.objectId()),
    //     team: Joi.objectId()
    //   });

    useEffect(() => {
        dispatch(loadproject(id));
    },[]);

    return ( 
        <div className="displayOneProject">
        <p className="title">One Project</p>
        <p>Name: {project.name}</p>
        <p>Project managers: {project.projectManagers}</p>
        <p>Tasks: {project.tasks}</p>
        <p>Status: {project.status}</p>
        <p>Tasks: {project.tasks}</p>
        </div>
     );
  }
   
  export default OneProject;