import React from "react"; // eslint-disable-next-line
import {
  isLoggedIn,
  currentUser,
  AuthButton,
} from "../../utils/netlifyAuth.js"; // eslint-disable-next-line
import styles from "./AppHeader.scss";

import logo from "../../assets/cog_logo.png";
import { MdAccountCircle } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";

export default class AppHeader extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <a className="backToGuelphCA" href="https://guelph.ca">
            ← Guelph.ca
          </a>

          <div className="rightBox">
            <a className="contact-us" href="https://guelph.ca/city-hall/contact-us/">
              <FiPhoneCall className="react-icon"/>
              Contact Us
            </a>

            {isLoggedIn() ? (
              <p>
                <MdAccountCircle className="react-icon"/>
                Welcome, {currentUser()}
              </p>
            ) : (
              <></>
            )}
            <div className="nav-btn-wrapper">
              <AuthButton />
            </div>
          </div>
        </nav>
        <div className="bannerBox">
          <div className="bannerWrap">
            <div className="title">
              <img id="site-logo" src={logo} alt="City of Guelph Logo"></img>
              <span className="line-divider"></span>
              <h1 className="logo-text">MyGuelph</h1>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
