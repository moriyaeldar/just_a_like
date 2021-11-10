import { useEffect } from 'react';
import { Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { authCheckState } from './users/store/user.actions';
import { HomePage } from './general/pages/HomePage';
import Auth from "./users/pages/Auth";
import TasksPage from "./tasks/pages/Tasks";
import Layout from "./hoc/Layout/Layout";
import AllProjects from './projects/pages/AllProjects';
import OneProject from './projects/pages/OneProject';
import "./App.css";
import { Profile } from "./users/pages/profile";

function App() {
  const dispatch = useDispatch();
  const { token } = useSelector((state:any) => state.userModule);

  useEffect(() => {
    dispatch(authCheckState());
  },[])

  let routes = (
    <Layout>
      <Switch />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/tasks" component={TasksPage} />
      <Route exact path="/projects" component={AllProjects} />
      <Route exact path="/projects/:id" component={OneProject} />
    </Layout>
  )

  if(!token) {
    routes = (
      <>
      <Route exact path="/" component={Auth} />
      </>
    )
  }

  return (routes);
}

export default App;
