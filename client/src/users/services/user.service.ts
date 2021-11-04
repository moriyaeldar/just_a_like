import Axios from 'axios';


const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser';
export const userService = {
  login,
  logout,
  signup,
  getLoggedinUser,
  update
};
const axios = Axios.create({
  withCredentials: true,
});
const STORAGE_KEY_LOGGEDIN = 'loggedinUser';

const BASE_USER_URL =
  process.env.NODE_ENV === 'production'
    ? '/api/auth/'
    : 'http://localhost:8000/api/auth/';




async function update(user:any) {
  console.log('this is user storage***********');
  // Handle case in which admin updates other user's details
  if (getLoggedinUser()._id === user._id) _saveLocalUser(user);
  return user;
}

async function login(userCred = {}) {
  const user = await axios.post('auth/login', userCred)
    .then((res) => res.data);
  // socketService.emit('set-user-socket', user._id);
  if (user) return _saveLocalUser(user);
}

async function signup(userCred:Object) {
  const user = await axios.post('auth/signup', userCred)
  .then((res) => res.data);
  return _saveLocalUser(user);
}

async function logout() {
  sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER);
  return await axios.post('auth/logout')
  .then((res) => res.data);
}

function _saveLocalUser(user:Object) {
  if (!user) return;
  sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user));
  return user;
}

function getLoggedinUser() {
  return JSON.parse(
    sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER) || 'null'
  );
}

