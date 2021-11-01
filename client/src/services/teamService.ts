
import Axios from 'axios';

const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? '/api/team/'
    : 'http://localhost:3030/api/team/';

const axios = Axios.create({
  withCredentials: true,
});


const STORAGE_KEY_LOGGEDIN = 'loggedinUser';

export const teamService = {
  query,
  getById,
  save,
  remove,

};
async function query(filterBy = {}) {
  
  return axios
    .get('http://localhost:3030/api/team', { params: filterBy })
    .then((res) => res.data);
}



function getById(teamId:string) {
  return axios
    .get(`http://localhost:3030/api/team/${teamId}`)
    .then((res) => res.data);
}
function remove(teamId:string) {
  return axios.delete(`http://localhost:3030/api/team/${teamId}`);
  
}
async function save(team:any) {
  if (team._id) {
    
    return axios
      .put('http://localhost:3030/api/team', team)
      .then((res) => res.data);
  } else {

    return axios
      .post('http://localhost:3030/api/team', team)
      .then((res) => res.data);
  }
}



