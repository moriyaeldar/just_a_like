import { projectService } from '../services/projectService';
import * as actions from './acrionTypes';

export function loadprojects(filter = {}) {
  return async (dispatch:any) => {
    try {
      const projects = await projectService.getAllProjects();
      dispatch({
        type: actions.GET_PROJECTS,
        projects,
      });
      // dispatch({
      //   type: 'FILTER_projectS',
      //   filter,
      // });
      return projects;
    } catch (err) {
      console.log('Cannot load projects', err);
    }
  };
}

export function loadproject(projectId: string) {
  return async (dispatch:any) => {
    try {
      const project = await projectService.getProjectById(projectId);
      dispatch({
        type: actions.GET_PROJECT,
        project,
      });
      return project;
    } catch (err) {
      console.log('Cannot load projects', err);
    }
  };
}
export function filterprojects(filter:any = null) {
  // return async (dispatch) => {
  //   try {
  //     const projects = await projectService.query(filter);
  //     dispatch({
  //       type: 'SET_projectS',
  //       projects,
  //     });
  //   } catch (err) {
  //     showErrorMsg('Cannot load projects');
  //     console.log('Cannot load projects', err);
  //   }
  // };
}

export function onRemoveproject(projectId:string) {
  return (dispatch:any, getState:any) => {
    projectService
      .deleteProject(projectId)
      .then(() => {
        console.log('Deleted Succesfully!');
        dispatch({
          type: actions.DEL_PROJECT,
          projectId,
        });
      })
      .catch((err:any) => {
        console.log('Cannot remove project', err);
      });
  };
}

export function createProject(project:Object) {
  return (dispatch:any) => {
    // const project = projectService.getEmptyproject();
    const addedproject = projectService
      .createProject(project)
      .then((savedproject) => {
        console.log('Added project', savedproject);
        dispatch({
          type: actions.SET_PROJECT,
          project: savedproject,
        });
      })
      .catch((err) => {
        console.log('Cannot add project', err);
      });
  };
}

export function onUpdateproject(project:Object) {
  return async (dispatch:any) => {
    try {
      const updatedproject = await projectService.updateProject(project);
      dispatch({
        type: actions.PUT_PROJECT,
        updatedproject,
      });
      return project;
    } catch (err) {
      console.log('Cannot  update project', err);
    }
  };
}

export function onSetCurrproject(projectId:string) {
  return async (dispatch:any) => {
    try {
      const currproject = await projectService.getProjectById(projectId);
      dispatch({
        type: 'SET_CURR_project',
        currproject,
      });
      return currproject;
    } catch (err) {
      console.log('Cannot  onSetCurrproject ', err);
    }
  };
}
