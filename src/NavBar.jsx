import React from 'react';
import { NavLink } from 'react-router-dom';

const linkStyles = {
  display: "inline-block",
  width: "150px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "orchid",
  textDecoration: "none",
  color: "black",
};

function NavBar() {
  return (
    <div>
      <h1 style={{backgroundColor: "lightgrey"}}>Jessica Nelson</h1>
      <NavLink
        to="/"
        style={linkStyles}
      >
        Home
      </NavLink>
      <NavLink
        to="/books"
        style={linkStyles}
      >
        Books
      </NavLink>
      <NavLink
        to="/resources"
        style={linkStyles}
      >
       Writer Resources
      </NavLink>
    </div>
  );
}



export default NavBar   