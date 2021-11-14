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
    const [ projectManager, setProjectManager ]: any = useState();
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
        getProjectManager();
    },[]);

    async function getProjectManager(){
        let pm: string;
        if(project.projectManager)
            pm = await getUserById(project.projectManager);
        setProjectManager(pm);
    };

    return ( 
        <div className="displayOneProject">
            <li className="title">One Project</li>
            <li>Name: {project.name}</li>
            <li>Project manager: {project.projectManager}</li>
            <li>Description: {project.description}</li>
            <li>Tasks: {project.tasks}</li>
            <li>Status: {project.status}</li>
            <li>Participants: {project.participants}</li>
        </div>
     );
  }
   
  export default OneProject;