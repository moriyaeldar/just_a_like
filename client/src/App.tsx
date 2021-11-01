import React from 'react';
import './styles/app.css';
import { Switch, Route} from 'react-router-dom';
import Auth from './containers/Auth/Auth';
import Project from './components/Project';

function App() {
  return (
    <div>
        <Switch/>
        <Route exact path='/' component={Project}/>
        <Route exact path='/auth' component={Auth}/>
    </div> 
  );
}

export default App;
