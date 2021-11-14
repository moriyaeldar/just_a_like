import { useState, useEffect } from 'react';
import { AxiosResponse } from 'axios';
import { FC } from 'react';
import { projectService } from './../services/projectService';
import { useDispatch, useSelector } from 'react-redux';
import { loadprojects } from './../store/project.actions';
import ListProjects from '../components/ListProjects';
import { Link } from 'react-router-dom';

const AllProjects:FC = () => {
const dispatch = useDispatch();
const { projects } = useSelector((state: any)=>state.projectModule);

  useEffect(() => {
      dispatch(loadprojects());
  },[]);
  
  return(
      <>
        {
          <Link to="/projects/new">
            <button>
              <a>
                Add Project
              </a>
            </button>
          </Link>
        }
        <ListProjects projects = {projects} />
      </>
    )
}

export default AllProjects;
