import React from "react";
import { useState } from "react";
import { RiCloseLine, RiMenu3Fill } from "react-icons/ri";
import "./Navbar.scss";
import logo from "../../assets/logo.svg";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div>
      <div className="gpt3__navbar">
        <div className="gpt3__navbar-link">
          <div className="gpt3__navbar-link_logo">
            <img src={logo} alt="" />
          </div>
          <ul className="gpt3__navbar-link_container">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#wgpt3">What is GPT3?</a>
            </li>
            <li>
              <a href="#possibility">Open AI</a>
            </li>
            <li>
              <a href="#features">Case Studies</a>
            </li>
            <li>
              <a href="#blog">Library</a>
            </li>
          </ul>
        </div>
        <div className="gpt3__navbar-sign">
          <p>Sign in</p>
          <button type="button">Sign up</button>
        </div>
        <div className="gpt3__navbar-menu">
          {toggleMenu ? (
            <RiCloseLine
              color="white"
              size={30}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu3Fill
              color="#fff"
              size={27}
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <div className="gpt3__navbar-menu">
              <div className="gpt3__navbar-menu_container scale-up-center">
                <div className="gpt3__navbar-menu_container-links">
                  <li>
                    <a href="#home">Home</a>
                  </li>
                  <li>
                    <a href="#wgpt3">What is GPT3?</a>
                  </li>
                  <li>
                    <a href="#possibility">Open AI</a>
                  </li>
                  <li>
                    <a href="#features">Case Studies</a>
                  </li>
                  <li>
                    <a href="#blog">Library</a>
                  </li>
                </div>
                <div className="gpt3__navbar-menu_container-links-sign">
                  <p>Sign in</p>
                  <button type="button">Sign up</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
