import React from 'react'

const linkStyles = {
  display: "inline-block",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

/* define the NavBar component */
function NavBar() {
  return (
    <div>
      <NavLink
        to="/"
        /* set exact so it knows to only set activeStyle when route is deeply equal to link */
        exact
        /* add styling to Navlink */
        style={linkStyles}
        /* add prop for activeStyle */
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

// const NavBar = () => {
//   return (
//     <div>
//       <h1>Welcome to Jessica Nelson's Website</h1>
//         <h2>All Book Lovers Welcome</h2>
//         <button>Home</button>
//         <button>Books</button>
//         <button>Writer Resources</button>
//     </div>
//   )
// }

export default NavBar   