import React from 'react';
import Project from './components/Project'
import './styles/app.css';
import { Switch, Route} from 'react-router-dom';
import Auth from './containers/Auth/Auth';

function App() {
  return (
    <div>
        <Project />
        <Switch/>
        <Route exact path='/auth' component={Auth}/>
    </div> 
  );
}

export default App;
