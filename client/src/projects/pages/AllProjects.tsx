import { useState, useEffect } from 'react';
import { AxiosResponse } from 'axios';
import { FC } from 'react';
import { projectService } from './../services/projectService';
import { useDispatch, useSelector } from 'react-redux';
import { loadprojects } from './../store/project.actions';
import ListProjects from '../components/ListProjects';
import { ProjectPreview } from './../components/ProjectPreview';

const AllProjects:FC = () => {
const dispatch = useDispatch();
const { projects } = useSelector((state: any)=>state.projectModule);

  useEffect(() => {
      dispatch(loadprojects());
  },[]);
  
  console.log(projects);
  return(
      <>
        <p>AllProjects</p>
        <ListProjects projects = {projects} />
      </>
    )
}

export default AllProjects;
