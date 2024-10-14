import React, { useState } from "react";
import { data } from "../restApi.json";
//  import { Link } from "react-scroll react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
 import { Link } from "react-router-dom";
// import { HiOutlineArrowRight } from "react-icons/hi";
const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <nav>
       
        <div className="logo">Universal Yums</div>
        <div className={show ? "navLinks showmenu" : "navLinks"}>
          

         <Link to={'/about'}>About</Link>
         <Link to={'/qualities'}>service</Link>
         <Link to={'/Team'}>Team</Link>
          <Link to={'/register'}>Register/login</Link>
          <Link to={'/reservation'}>Reservation</Link>
          {/* <Link to={'/fee'}>payment</Link> */}
          <Link to={"/profile"}>My Profile </Link>
          
        </div>
        <div className="hamburger" onClick={()=> setShow(!show)}>
                <GiHamburgerMenu/>
        </div>
      </nav>
    </>
  );
};

export default Navbar;