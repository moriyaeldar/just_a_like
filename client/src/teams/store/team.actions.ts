import { teamService } from '../services/teamService';

export function loadteams(filter = {}) {
  return async (dispatch:any) => {
    try {
      const teams = await teamService.query(filter);
      dispatch({
        type: 'SET_teamS',
        teams,
      });
      // dispatch({
      //   type: 'FILTER_teamS',
      //   filter,
      // });
      return teams;
    } catch (err) {
      console.log('Cannot load teams', err);
    }
  };
}
export function filterteams(filter:any = null) {
  // return async (dispatch) => {
  //   try {
  //     const teams = await teamService.query(filter);
  //     dispatch({
  //       type: 'SET_teamS',
  //       teams,
  //     });
  //   } catch (err) {
  //     showErrorMsg('Cannot load teams');
  //     console.log('Cannot load teams', err);
  //   }
  // };
}

export function onRemoveteam(teamId:string) {
  return (dispatch:any, getState:any) => {
    teamService
      .remove(teamId)
      .then(() => {
        console.log('Deleted Succesfully!');
        dispatch({
          type: 'REMOVE_team',
          teamId,
        });
      })
      .catch((err:any) => {
        console.log('Cannot remove team', err);
      });
  };
}

export function onAddteam(team:Object) {
  return (dispatch:any) => {
    // const team = teamService.getEmptyteam();
    const addedteam = teamService
      .save(team)
      .then((savedteam) => {
        console.log('Added team', savedteam);
        dispatch({
          type: 'ADD_team',
          team: savedteam,
        });
      })
      .catch((err) => {
        console.log('Cannot add team', err);
      });
  };
}

export function onUpdateteam(team:Object) {
  return async (dispatch:any) => {
    try {
      const updatedteam = await teamService.save(team);
      dispatch({
        type: 'UPDATE_team',
        updatedteam,
      });
      return team;
    } catch (err) {
      console.log('Cannot  update team', err);
    }
  };
}

export function onSetCurrteam(teamId:string) {
  return async (dispatch:any) => {
    try {
      const currteam = await teamService.getById(teamId);
      dispatch({
        type: 'SET_CURR_team',
        currteam,
      });
      return currteam;
    } catch (err) {
      console.log('Cannot  onSetCurrteam ', err);
    }
  };
}
