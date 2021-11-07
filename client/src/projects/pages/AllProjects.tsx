import { useState, useEffect } from 'react';
import { AxiosResponse } from 'axios';
import { FC } from 'react';
import { projectService } from './../services/projectService';
// import { useDispatch,useSelector } from 'react-redux';
// import { loadprojects } from './../store/project.actions';

const AllProjects:FC = () => {
const [projects, setProjects] = useState([]);
// const dispatch = useDispatch();
// const {projects} =useSelector((state: any)=>state.projectModule);

  useEffect(() => {
    // dispatch(loadprojects());
  });
  
  
  const handleGetAllClick = async () => {
    const allprojects = await projectService.getAllProjects();
    setProjects(allprojects);
    console.log(allprojects);
  }
  
   return(
      <>
        <p>AllProjects</p>
        <button onClick={handleGetAllClick}>Get all projects</button>
        {projects.map((project: any) => <p key={project._id}>{project.name}</p>)}
      </>
    )
}

export default AllProjects
