import { useState } from 'react';
import { AxiosResponse } from 'axios';
import { FC } from 'react';
import { projectService } from './../services/projectService';

const AllProjects:FC = () => {
  const [projects, setProjects] = useState();

  const handleClick = async () => {
      const allprojects = await projectService.getAllProjects();
      console.log(allprojects);
    }

  return (
      <>
        <p>AllProjects</p>
        <button onClick={handleClick}>Get all projects</button>
      </>
    )
}

export default AllProjects
