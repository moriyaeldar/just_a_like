import Axios from 'axios';

const BASE_USER_URL =
  process.env.NODE_ENV === 'production'
    ? '/api/auth/'
    : 'http://localhost:8000/api/auth/';

export const userService = {
      login,
      register,
      tokenIsValid,
      getLoggedinUser
};
const axios = Axios.create({
  baseURL: BASE_USER_URL,
  withCredentials: true,
});
const STORAGE_KEY_LOGGEDIN = 'loggedinUser';
const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser';




export interface LoginInterface {
  userID?: string;
  tokenID: string;
}

async function login(data: LoginInterface){
  try{
    if(data.userID) {
      const res = await Axios.post(`${BASE_USER_URL}facebook-login/`, data);
      return res.data;
    }else {
      const res = await Axios.post(`${BASE_USER_URL}google-login/`, data);
      return res.data;
    }
  }catch (err) {
    return err;
  }
}

export interface RegisterInterface {
  userID?: String;
  tokenID: String;
  username?: String;
  phone_number: String;
  linkedin_url: String;
  expertise: String;
  interests: Array<string>;
}

async function register(data: RegisterInterface) {
  try{
    if(data.userID) {
      const res = await Axios.post(`${BASE_USER_URL}facebook-register/`, data);
      return res.data;
    }else {
      const res = await Axios.post(`${BASE_USER_URL}google-register/`, data);
      return res.data;
    }
  }catch (err) {
    return err;
  }
}

async function tokenIsValid(token:any) {
  try{
    const res = await Axios.post(`${BASE_USER_URL}tokenIsValid`, null, {headers: { "x-auth-token": token }});
    return res.data;
  }catch (err) {
    return err;
  }
}

// async function update(user:any) {
//   console.log('this is user storage***********');
//   // Handle case in which admin updates other user's details
//   if (getLoggedinUser()._id === user._id) _saveLocalUser(user);
//   return user;
// }

// function _saveLocalUser(user:Object) {
//   if (!user) return;
//   sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user));
//   return user;
// }

function getLoggedinUser() {
  return JSON.parse(
    sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER) || 'null'
    );
  }


  
  