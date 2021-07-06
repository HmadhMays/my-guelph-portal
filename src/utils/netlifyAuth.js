import React from "react";
import netlifyIdentity from "netlify-identity-widget";
import { FaSignOutAlt, FaSignInAlt } from "react-icons/fa";
import { withRouter } from "react-router-dom";

export const isLoggedIn = () => {
  const currentUser = netlifyIdentity.currentUser();

  if (currentUser != null) {
    return true;
  }
  return false;
};

export const currentUser = () => {
  if (netlifyIdentity.currentUser().user_metadata.full_name) {
    return netlifyIdentity.currentUser().user_metadata.full_name;
  }
  return netlifyIdentity.currentUser().email;
};

export const netlifyAuth = {
  isAuthenticated: false,
  user: null,
  initialize(callback) {
    window.netlifyIdentity = netlifyIdentity;
    netlifyIdentity.on("init", (user) => {
      callback(user);
    });
    netlifyIdentity.init();
  },
  authenticate(callback) {
    this.isAuthenticated = true;
    netlifyIdentity.open();
    netlifyIdentity.on("login", (user) => {
      this.user = netlifyIdentity.currentUser();
      callback();
      netlifyIdentity.close();
      window.location.reload(false);
    });
  },
  signout(callback) {
    this.isAuthenticated = false;
    netlifyIdentity.logout();
    netlifyIdentity.on("logout", () => {
      this.user = null;
      callback();
      window.location.reload(false);
    });
  },
};

export const AuthButton = withRouter(({ history }) =>
  isLoggedIn() ? (
    <button
      className="a-btn"
      onClick={() => {
        netlifyAuth.signout(() => history.push("/"));
      }}
    >
      <FaSignOutAlt style={{ padding: "0 0.5em 0 0", position: "relative" }} />
      Sign out
    </button>
  ) : (
    <button
      className="a-btn--filled"
      onClick={() => {
        netlifyAuth.authenticate(() => history.push("/"));
      }}
    >
      <FaSignInAlt style={{ padding: "0 0.5em 0 0", position: "relative" }} />
      Sign in
    </button>
  )
);

export default netlifyAuth;
