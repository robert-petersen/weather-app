import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaCloudSunRain } from "react-icons/fa";

const NavBar = () => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if(window.scrollY >= 80) {
      setScrollNav(true);
    }
    else{
      setScrollNav(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <nav className={`nav ${ scrollNav ? "scrolling" : "" }`}>
      <div className="nav_section nav_left">
        <Link className="nav_icon" to="/" ><FaCloudSunRain /></Link>
        <Link className="nav_title" to="/" >Weather App</Link>
      </div>
      <div className="nav_section nav_right">
        <div>Quick Search option here</div>
        <div>theme?</div>
      </div>
    </nav>
  )
}

export default NavBar;