
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Math from './components/Math';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
// import {Routes,Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">

     <Navbar/>
    
         <Switch>
          <Route exact path="/footer">
            <Footer />
          </Route>
          <Route exact path="/math">
            <Math />
          </Route>
         
        </Switch>
     </div>
    </Router>
  );
}

export default App;
