import { Switch, Route } from "react-router-dom";
import Auth from "./users/components/Auth";
import Project from "./projects/components/Project";
import TasksPage from "./tasks/pages/TasksPage";
import Layout from "./hoc/Layout/Layout";
import "./App.css";

function App() {
  return (
    <Layout>
      <Switch />
      <Route exact path="/" component={Project} />
      <Route exact path="/auth" component={Auth} />
      <Route exact path="/tasks" component={TasksPage} />
    </Layout>
  );
}

export default App;
