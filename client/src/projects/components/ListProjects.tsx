import { FC } from 'react';
import { ProjectView } from './ProjectView';

const ListProjects = ({projects} : {projects: Array<any>}) => {
    return (
        <>
         {projects && projects.map((project: any) => <ProjectView project={project}/>)}
        </>
    );
}

export default ListProjects;