import { FC, useEffect } from 'react';
import { useState } from 'react';
import { projectService } from '../services/projectService';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { loadproject } from '../store/project.actions';
import { getUserById } from '../../users/services/user.service';
// import Joi from 'joi';
// Joi.objectId = require('joi-objectid')(Joi);

const OneProject:FC = () => {
    const dispatch = useDispatch();
    const { project } = useSelector((state: any) => state.projectModule);
    const {id}: {id: string} = useParams(); 
    //Validate of project:
    // const schema = Joi.object({
    //     name: Joi.string(),
    //     projectManager: Joi.Joi.objectId().required(),
    //     status: Joi.number(),
    //     tasks: Joi.array().item(Joi.objectId()),
    //     team: Joi.objectId()
    //   });

    useEffect(() => {
        dispatch(loadproject(id));
        console.log(project.participants);
    },[]);

    if(project.projectManager)
        return ( 
            <div className="displayOneProject">
                <li className="title">One Project</li>
                <li>Name: {project.name}</li>
                <li>Project manager: {project.projectManager.username}</li>
                <li>Description: {project.description}</li>
                {/* <li>Tasks: {project.tasks}</li> */}
                {project.tasks.map((task: any) => <li key={task._id}>{task.name}</li>)}
                <li>Status: {project.status}</li>
                <h3>participants: </h3>
                <ul>
                {project.participants.map((member: any) => <li key={member._id}>{member.username}</li>)}
                </ul> 
            </div>
         );
    
    return (<h1>Loading...</h1>);
  }
   
  export default OneProject;