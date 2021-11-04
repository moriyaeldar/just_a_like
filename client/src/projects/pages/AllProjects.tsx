import { useState } from 'react';
import { AxiosResponse } from 'axios';
import { FC } from 'react';
import { projectService } from './../services/projectService';

const AllProjects:FC = () => {
  const [projects, setProjects] = useState();

  const handleGetAllClick = async () => {
    const allprojects = await projectService.getAllProjects();
    const project = await projectService.updateProject(JSON.stringify({
      _id: "61810e70c56eeb2f11278b96",
      name: "MiddleEast-USA",
      projectManagers: ["61810a8d4d3e443431ded4ac"],
      status: 1,
      tasks: ["61810a8d4d3e443431ded4ac"],
      team:["61810a8d4d3e443431ded4ac"]    
    }))
    console.log(allprojects);
  }

  return (
      <>
        <p>AllProjects</p>
        <button onClick={handleGetAllClick}>Get all projects</button>
      </>
    )
}

export default AllProjects
