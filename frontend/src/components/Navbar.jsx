import React, { useState } from "react";
import { data } from "../restApi.json";
import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { firebaseAuth } from "../Pages/firebase-config";
const Navbar = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (!currentUser) {
      navigate('/login');
    }
  });
  return (
    <>
      <nav>
        <div className="logo">ZEESH</div>
        <div className={show ? "navLinks showmenu" : "navLinks"}>
          <div className="links">
            {data[0].navbarLinks.map((element) => (
              <Link
                to={element.link}
                spy={true}
                smooth={true}
                duration={500}
                key={element.id}
              >
                {element.title}
              </Link>
            ))}
          </div>
          <button onClick={()=>{
            console.log("Hello")
            signOut(firebaseAuth)}} className="menuBtn">LOGOUT</button>
        </div>
        <div className="hamburger" onClick={()=> setShow(!show)}>
                <GiHamburgerMenu/>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
