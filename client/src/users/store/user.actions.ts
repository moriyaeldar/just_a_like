import { userService, RegisterInterface, LoginInterface } from "../services/user.service";
import * as actionTypes from './actionTypes';

export const authStart = () => {
  return { 
      type: actionTypes.AUTH_START
  }
}

export const authSuccess = (user: object,token: string) => {
  return {
      type: actionTypes.AUTH_SUCCESS,
      user: user,
      token: token
  }
}

export const authFail = (error: any) => {
  return {
      type: actionTypes.AUTH_FAIL,
      error: error
  }
}

export const authLogout = () => {
  localStorage.removeItem('userId');
  localStorage.removeItem('token');
  return {
      type: actionTypes.AUTH_LOGOUT
  }
}

export const authRegister = (data: RegisterInterface) => {
  return async (dispatch:any) => {
    try{
      dispatch(authStart());
      const res = await userService.register(data);

      localStorage.setItem('token', res.token);
      localStorage.setItem('userId', res.user._id);
      dispatch(authSuccess(res.user, res.token));
    }catch(err){
      dispatch(authFail(err));
    }
  }
}

export const authLogin = (data: LoginInterface) => {
  return async (dispatch:any) => {
    try{
      dispatch(authStart());
      const res = await userService.login(data);
      
      localStorage.setItem('token', res.token);
      localStorage.setItem('userId', res.user._id);
      dispatch(authSuccess(res.user, res.token));
    }catch(err){
      dispatch(authFail(err));
    }
  };
}






// export function onUpdateUser(credentials:Object) {
//   return async (dispatch:any) => {
//     try {
//       console.log('this is on update', credentials);
//       const user = await userService.update(credentials)
//       console.log('user in update', user);
//       dispatch({
//         type: "SET_USER",
//         user,
//       });
//       return user;
//     } catch (err) {
//       console.log("Cannot signup", err);
//     }
//   };
// }

// export function getCurrentUser() {
//   return async (dispatch:any) => {
//     try {
//       const user = await userService.getLoggedinUser();
//       dispatch({
//         type: "SET_USER",
//         user,
//       });
//       return user;
//     } catch (err) {
//       console.log("No user found", err);
//     }
//   };
// }

