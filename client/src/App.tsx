import { Switch, Route} from 'react-router-dom';
import Auth from './users/components/Auth';
import Project from './projects/components/Project';
import Sidebar from './components/Sidebar';
import './App.css'

function App() {
  return (
    <div className="project-container">
        <Sidebar />
        <Switch/>
        <Route exact path='/' component={Project}/>
        <Route exact path='/auth' component={Auth}/>
    </div> 
  );
}

export default App;
