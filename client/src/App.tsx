import { Switch, Route} from 'react-router-dom';
import Auth from './users/components/Auth';
import Project from './projects/components/Project';
import Sidebar from './general/Sidebar';

function App() {
  return (
    <div>
        <Sidebar />
        <Switch/>
        <Route exact path='/' component={Project}/>
        <Route exact path='/auth' component={Auth}/>
    </div> 
  );
}

export default App;
