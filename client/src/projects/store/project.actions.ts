import { projectService } from '../services/projectService';

export function loadprojects(filter = {}) {
  return async (dispatch:any) => {
    try {
      const projects = await projectService.getAllProjects();
      dispatch({
        type: 'SET_projectS',
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
          type: 'REMOVE_project',
          projectId,
        });
      })
      .catch((err:any) => {
        console.log('Cannot remove project', err);
      });
  };
}

export function onAddproject(project:Object) {
  return (dispatch:any) => {
    // const project = projectService.getEmptyproject();
    const addedproject = projectService
      .createProject(project)
      .then((savedproject) => {
        console.log('Added project', savedproject);
        dispatch({
          type: 'ADD_project',
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
        type: 'UPDATE_project',
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
