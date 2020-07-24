import React from 'react';
import './App.css';
import Loginpage from './Loginpage';
import PermanentDrawerLeft from './Drawer';
import {BrowserRouter,Route} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <switch>
    <Route path="/" exact component={Loginpage}/>
    <Route path="/register" component={PermanentDrawerLeft}/>
    </switch>
    </BrowserRouter>
    );
}

export default App;
