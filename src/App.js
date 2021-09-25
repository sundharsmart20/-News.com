
import './App.css';
import React,{useState,useEffect} from 'react';
import Service from './Service.js';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from "react-router-dom";
import Science from './Science.js'
import Technology from './Technology.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Entertainment from './Entertainment.js';
import Sports from './Sports.js';
import General from './General.js';
import Pageing from './Pageing.js';

function App() {
  let history = useHistory();


// var axios = require("axios").default;

// var options = {
//   method: 'GET',
//   url: 'https://newsdata.io/api/1/news?apikey=pub_1342f7888d09c650b9a5590fbb1f0a000c46&q=battlegrounds',
  
// };

// axios.request(options).then(function (response) {
//   console.log(response.data);
// }).catch(function (error) {
//   console.error(error);
// });


// Service.getEmployees().then((res)=>{
//   console.log(res.data)
// })


const handleClick=()=>{
  history.push('/Technology')
}
const handleClick1=()=>{
  history.push('/Science')
}

const[s,setS]=useState([]);


const handlePage=(page)=>{
    setS(page)
    
}

console.log("the pageasfk",s)
  return (
    <div className="container">
      <header>
      

      <nav  class="navbar  fixed-top navbar-expand-lg navbar-light bg-light shadow-lg p-3 mb-5 bg-body rounded">
            <a class="navbar-brand" href="/">@News</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse " id="navbarSupportedContent">
             
              <ul class="navbar-nav mr-auto ">
                <li class="nav-item active">
                  <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/Technology" onClick={handleClick}>Technology</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/Science" onClick={handleClick1}>Science</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/Entertainment" >Entertainment</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/Sports" >Sports</a>
                </li>
            
              </ul>
              
            </div>
          </nav>
      </header>

      <main style={{marginTop:"6rem"}}>
         <Router>
        <div>

          <Switch>
            
            <Route exact path='/'>
              <General pageings={handlePage} />
            </Route>
            <Route exact path='/Technology'>
              <Technology pageings={handlePage}/>
            </Route>

            <Route exact path='/Science'>
              <Science pageings={handlePage}/>
            </Route>

            <Route exact path='/Entertainment'>
              <Entertainment pageings={handlePage}/>
            </Route>

             <Route exact path='/Sports'>
              <Sports pageings={handlePage}/>
            </Route>


              <Route exact path="/News">
                <Pageing  indexing={s}/>
              </Route>
            
          </Switch>
        </div>
    </Router>
      </main>
     <footer class="page-footer font-small blue text-center">

        All rights are reserved © 2021
     
    </footer>


    </div>
  );
}

export default App;
