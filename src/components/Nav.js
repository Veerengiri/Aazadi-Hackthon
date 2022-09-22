import React from "react";

const Nav = () => {
  return (
    <>
      <nav>
        <div className="logo">
          <img src="../imgs/logo.png" alt="" />
        </div>
        <div className="logo-txt">
          <h1>
            Ministry of sports and cultural activities Government of India
          </h1>
          <h2>Government of India</h2>
        </div>
        <div className="nav-btns">
          <div className="btn">Sign Up</div>
          <div className="btn">Sign In</div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
