import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/owner'>Owner</NavLink>
    </nav>
  )
};


export default Navbar
