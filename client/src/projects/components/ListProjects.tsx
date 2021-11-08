import { FC } from 'react';
import { ProjectPreview } from './ProjectPreview';

const ListProjects = ({projects} : {projects: Array<any>}) => {
    return (
        <>
         {projects.map((project: any) => <ProjectPreview project={project}/>)}
        </>
    );
}

export default ListProjects;