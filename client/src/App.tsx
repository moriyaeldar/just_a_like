import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { authCheckState, authLogout } from './users/store/user.actions';
import { HomePage } from './general/pages/HomePage';
import TasksPage from "./tasks/pages/Tasks";
import Auth from './users/pages/Auth';
import Layout from "./hoc/Layout/Layout";
import AllProjects from './projects/pages/AllProjects';
import ProjectDetails from './projects/pages/ProjectDetails';
import OneProject from './projects/pages/OneProject';
import MyProjects from './projects/pages/MyProjects';
import "./App.css";
import { Profile } from "./users/pages/profile";

function App() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state:any) => state.userModule.token ? true : false);

  // const Auth = React.lazy(() => import('./users/pages/Auth'));

  useEffect(() => {
    dispatch(authCheckState());
  },[])

  const logout = () => {
    dispatch(authLogout());
  }

  let routes = (
    <>
    <Route path="/auth" component={(props: any) => <Auth {...props} />} />
    <Redirect to="/auth" />
    </>
  )

  if(isAuthenticated) {
    routes = (
      <Layout onLogoutClick={logout}>
        <Switch/>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/tasks" component={TasksPage} />
        <Route exact path="/projects" component={AllProjects} />
        <Route exact path="/projects/:id" component={ProjectDetails} />
        <Route exact path="/myprojects" component={MyProjects} />
        <Route exact path="/myprojects/:id" component={OneProject} />
        <Redirect exact to="/"/>
    </Layout>
    )
  }

  return (routes);
}

export default App;
