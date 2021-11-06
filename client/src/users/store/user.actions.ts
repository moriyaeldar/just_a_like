import { userService } from "../services/user.service";

export function fetchExpertise() {
  return async (dispatch:any) => {
    try {
      const expertises = await userService.getExpertise();
      dispatch({
        type: "FETCH_EXPERTISE",
        expertises,
      });
    } catch (err) {
      console.log("Cannot login", err);
    }
  };
}

export function onLogin(credentials:Object) {
  return async (dispatch:any) => {
    try {
      const user = await userService.login(credentials);
      dispatch({
        type: "SET_USER",
        user,
      });
      return user;
    } catch (err) {
      console.log("Cannot login", err);
    }
  };
}

export function onSignup(credentials:Object) {
  return async (dispatch:any) => {
    try {
      console.log("!!!", credentials);
      const user = await userService.signup(credentials);
      dispatch({
        type: "SET_USER",
        user,
      });
      return user;
    } catch (err) {
      console.log("Cannot signup", err);
    }
  };
}
export function onUpdateUser(credentials:Object) {
  return async (dispatch:any) => {
    try {
      console.log('this is on update', credentials);
      const user = await userService.update(credentials)
      console.log('user in update', user);
      dispatch({
        type: "SET_USER",
        user,
      });
      return user;
    } catch (err) {
      console.log("Cannot signup", err);
    }
  };
}

export function onLogout() {
  return async (dispatch:any) => {
    try {
      await userService.logout();
      dispatch({
        type: "SET_USER",
        user: null,
      });
    } catch (err) {
      console.log("Cannot logout", err);
    }
  };
}

export function getCurrentUser() {
  return async (dispatch:any) => {
    try {
      const user = await userService.getLoggedinUser();
      dispatch({
        type: "SET_USER",
        user,
      });
      return user;
    } catch (err) {
      console.log("No user found", err);
    }
  };
}

