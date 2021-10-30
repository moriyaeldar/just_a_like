import React from 'react';
import './App.css';
import { Switch, Route} from 'react-router-dom';
import Auth from './containers/Auth/Auth';

function App() {
  return (
    <div>
        <Switch/>
        <Route exact path='/auth' component={Auth}/>
    </div> 
  );
}

export default App;
