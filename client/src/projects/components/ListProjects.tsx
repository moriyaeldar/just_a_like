import { FC } from 'react';
import { ProjectView } from './ProjectView';
import { useState } from 'react';

const ListProjects = ({projects} : {projects: Array<any>}) => {
    const [view, setView] =  useState("card");
    const transfer = {"card":"list", "list": "card"};
    
    const handleViewClick = () => {
        // setView(prevView=>transfer[prevView])
    };
    
    return (
        <>
        <button className="btn" onClick={handleViewClick}>Change view</button>
         {projects && projects.map((project: any) => <ProjectView project={project}/>)}
        </>
    );
}

export default ListProjects;