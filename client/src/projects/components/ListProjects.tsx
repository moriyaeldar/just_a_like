import { FC } from 'react';
import { ProjectView } from './ProjectView';
import { useState } from 'react';
import "../styles/ListProjects.scss";

const ListProjects = ({projects} : {projects: Array<any>}) => {
    const [view, setView] =  useState("card");
    // const transfer = {card:"list", list: "card"};
    
    const handleViewClick = () => {
        if(view==="card") 
            setView("list");
        else 
            setView("card");
    };
    
    return (
        <>
        {/* <button className="btn" onClick={handleViewClick}>Change view</button> */}
        <div className="list-projects">
            {projects && projects.map((project: any) => <ProjectView key={project._id} project={project}/>)} 
        </div>
        </>
    );
}

export default ListProjects;