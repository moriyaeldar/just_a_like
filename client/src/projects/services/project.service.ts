
import Axios from 'axios';
import { userService } from '../../users/services/user.service';
const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? '/api/project/'
    : 'http://localhost:8000/api/project/';

const axios = Axios.create({
  withCredentials: true,
});

const STORAGE_KEY = 'projectDB';
const STORAGE_KEY_LOGGEDIN = 'loggedinUser';

export const projectService = {
  query,
  getById,
  save,
  remove,
};
async function query(filterBy = {}) {
  return axios
    .get('http://localhost:8000/api/project', { params: filterBy })
    .then((res) => res.data);
}


function getById(projectId:string) {
  return axios
    .get(`http://localhost:8000/api/project/${projectId}`)
    .then((res) => res.data);

}
function remove(projectId:string) {
  return axios.delete(`http://localhost:8000/api/project/${projectId}`);
  
}
async function save(project:any) {
  if (project._id) {
    return axios
      .put('http://localhost:8000/api/project', project)
      .then((res) => res.data);
  } else {
    const user = await userService.getLoggedinUser();
    project.host = { fullname: user.fullname, _id: user._id, imgUrl: user.imgUrl };
   
    return axios
      .post('http://localhost:8000/api/project', project)
      .then((res) => res.data);
  }
}


// function login(credentials) {
//   return storageService.query(STORAGE_KEY).then((users) => {
//     const user = users.find(
//       (user) =>
//         user.username === credentials.username &&
//         user.password === credentials.password
//     );
//     if (user) {
//       sessionStorage.setItem(STORAGE_KEY_LOGGEDIN, JSON.stringify(user));
//     }
//     return user;
//   });
// }

