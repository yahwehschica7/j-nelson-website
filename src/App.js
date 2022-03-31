import React from "react"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import NavBar from "./NavBar";
import Home from "./Home";
import BookContainer from "./BookContainer";
import WriterResources from "./WriterResources";
import './App.css';
import Counter from "./Counter";

function App() {

   return (
    <div className="App">
        <Router>
          <NavBar />
            <Routes>
              <Route 
              exact path="/" 
              element={<Home />}>
              </Route>
              <Route 
              exact path="/books"
              element={<BookContainer />}
              ></Route>
              <Route 
              exact path="/resources"
              element={<WriterResources />}
              ></Route>
              <Route exact path="/counter"
              element={<Counter />}
              ></Route> 
            </Routes>
        </Router>
    </div>
  );
}  
          

export default App;
