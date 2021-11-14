import { useEffect } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { authCheckState, authLogout } from './users/store/user.actions';
import { HomePage } from './general/pages/HomePage';
import Auth from "./users/pages/Auth";
import TasksPage from "./tasks/pages/Tasks";
import Layout from "./hoc/Layout/Layout";
import AllProjects from './projects/pages/AllProjects';
import ProjectDetails from './projects/pages/ProjectDetails';
import MyProjects from './projects/pages/MyProjects';
import OneProject from './projects/pages/OneProject';
import "./App.css";
import { Profile } from "./users/pages/profile";

function App() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state:any) => state.userModule.token ? true : false);

  useEffect(() => {
    dispatch(authCheckState());
  },[])

  const logout = () => {
    dispatch(authLogout());
  }

  let routes = (
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

  if(!isAuthenticated) {
    routes = (
      <>
      <Switch />
      <Route path="/auth" component={Auth} />
      <Redirect to="/auth" />
      </>
    )
  }

  return (routes);
}

export default App;
