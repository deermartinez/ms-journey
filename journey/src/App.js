import React from 'react';
import Navbar from '../src/Components/navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import home from './Pages/home'
import 'bootstrap/dist/css/bootstrap.min.css';


// Catchphrase: "I have MS. MS doesn't have me"
// She wants the page to be inspiring. She wants to show that people with 
//autoimmune disease can live normal lives. 
// She wants some statistics on the disease on her page.
// Helpful links for resources
// She wants a form where people can sign up for inspirational quotes. 



function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path = '/' exact component ={home}/>
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
