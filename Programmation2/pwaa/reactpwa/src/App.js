import React from 'react';
import  Accueil  from './components/Accueil';
import Navi from './components/nav'
import "bootstrap/dist/css/bootstrap.min.css";
import './components/nav.scss'
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
<>
    <Navi/>
    
      <Switch>
      <Route path="/" exact  component={Accueil} />
      <Route path="/Home" component={Accueil} />
     
      
    </Switch>
    
    </>
  );
}

export default App;
