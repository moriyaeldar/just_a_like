import projectService from '../services/projectService';
import { useState } from 'react';
import { AxiosResponse } from 'axios';

const AllProjects = () => {
  const [projects, setProjects] = useState();

  const handleClick = () => {
      const allprojects = projectService.getAll();
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
