import React from "react"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import NavBar from "./NavBar";
import Home from "./Home";
import BookContainer from "./BookContainer";
import WriterResources from "./WriterResources";
import './App.css';

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
              <Route path="/books"
              element={<BookContainer />}
              ></Route>
              <Route path="/resources"
              element={<WriterResources />}
              ></Route>
            </Routes>
        </Router>
    </div>
  );
}  
          

export default App;
