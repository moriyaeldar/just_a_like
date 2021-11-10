import Axios from "axios";
import { userService } from "../../users/services/user.service";
const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "/api/task/"
    : "http://localhost:8000/api/task/";

const axios = Axios.create({
  withCredentials: true,
});

const STORAGE_KEY = "taskDB";
const STORAGE_KEY_LOGGEDIN = "loggedinUser";

export const taskService = {
  query,
  getById,
  save,
  remove,
};
async function query(filterBy = {}) {
  const res = await Axios.get("http://localhost:8000/api/task", {
    params: filterBy,
  });
  return res.data;
}

function getById(taskId: string) {
  return axios
    .get(`http://localhost:8000/api/task/${taskId}`)
    .then((res) => res.data);
}
function remove(taskId: string) {
  return axios.delete(`http://localhost:8000/api/task/${taskId}`);
}
async function save(task: any) {
  if (task._id) {
    return axios
      .put("http://localhost:8000/api/task", task)
      .then((res) => res.data);
  } else {
    const user = await userService.getLoggedinUser();
    task.host = { fullname: user.fullname, _id: user._id, imgUrl: user.imgUrl };

    return axios
      .post("http://localhost:8000/api/task", task)
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
