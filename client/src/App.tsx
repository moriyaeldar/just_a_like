import { Switch, Route } from "react-router-dom";
import { HomePage } from './general/pages/HomePage';
import Auth from "./users/components/Auth";
import TasksPage from "./tasks/pages/Tasks";
import Layout from "./hoc/Layout/Layout";
import AllProjects from './projects/pages/AllProjects';
import OneProject from './projects/pages/OneProject';
import "./App.css";
import { Profile } from "./users/pages/profile";

function App() {
  return (
    <Layout>
      <Switch />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/auth" component={Auth} />
      <Route exact path="/tasks" component={TasksPage} />
      <Route exact path="/projects" component={AllProjects} />
      <Route exact path="/projects/:id" component={OneProject} />
    </Layout>
  );
}

export default App;
