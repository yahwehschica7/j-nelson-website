import React from 'react';
import { NavLink } from 'react-router-dom';

const linkStyles = {
  display: "inline-block",
  width: "150px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "lightpink",
  textDecoration: "none",
  color: "black",
};

function NavBar() {
  return (
    <div>
      <h1 style={{backgroundColor: "burlywood"}}>Welcome to Jessica Nelson's Website</h1>
      <NavLink
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/books"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Books
      </NavLink>
      <NavLink
        to="/resources"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
       Writer Resources
      </NavLink>
    </div>
  );
}



export default NavBar   