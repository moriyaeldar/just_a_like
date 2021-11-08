import { Switch, Route } from "react-router-dom";
import Auth from "./users/components/Auth";
import Project from "./projects/components/Project";//This one in not the dashboard
import TasksPage from "./tasks/pages/Tasks";
import Layout from "./hoc/Layout/Layout";
import AllProjects from './projects/pages/AllProjects';
import OneProject from './projects/pages/OneProject';
import "./App.css";
import { Profile } from "./users/pages/profile";
import {Header} from "./general/components/app-header"

function App() {
  return (
    <Layout>
      <Switch />
      <Route exact path="/" component={Project} />
      <Route exact path="/auth" component={Auth} />
      <Route exact path="/tasks" component={TasksPage} />
      <Route exact path="/projects" component={AllProjects} />
      <Route exact path="/project/:id" component={OneProject} />
    </Layout>
  );
}

export default App;
