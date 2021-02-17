import React from 'react';
import Navbar from '../src/Components/navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path = '/' exact/>
      </Switch>
      </Router>
    </>
  )
}

export default App













// import React, {Component} from 'react';
// import "./Styles/style.css"
// import Header from "../src/Components/header";
// import Navbar from "../src/Components/navbar";
// import Widgets from "../src/Components/widgets";
// import {BrowserRouter as Router, Switch,} from 'react-router-dom';



// function App() {
//   return (
//     <Router>
//       <Navbar/>
//         <Switch>
//           <Route path = '/'/>
//         </Switch>

//     </Router>
//   );
// }

// export default App;
