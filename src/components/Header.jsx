import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="headerCont">
         <h1>My Websait</h1>
         <div className="textCont">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/contacts">Contacts</NavLink>
         </div>
    </div>
  );
}

export default Header;