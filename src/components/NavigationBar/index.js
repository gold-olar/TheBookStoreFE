import React from "react";
import { connect } from "react-redux";
import { userLogOut } from "../../Actions/authActions";
import { NavLink } from 'react-router-dom';

const NavigationBar = (props) => {
  return (
    <>

      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <NavLink className="navbar-brand" to="/">TheBookStore</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink exact className="nav-link" to="/">
                  HOME
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact className="nav-link" to="/book_reviews">
                REVIEWS
              </NavLink>
            </li>
            <li>
              <NavLink exact className="nav-link" to="/books">
                BOOKS
              </NavLink>
            </li>
            <li>
                <NavLink exact className="nav-link" to="/library">
                  LIBRARY
                </NavLink>
              </li>
            {props?.auth?.token ? (
                      <>
                        <NavLink
                          onClick={() => props.userLogOut()}
                          to="/"
                          className="login popup-with-form nav-link"
                        >
                          <i className="flaticon-user"></i>
                          <span> LOG OUT </span>
                        </NavLink>
                      </>
                    ) : (
                      <NavLink
                        to="/login"
                        className="login popup-with-form nav-link"
                      >
                        <i className="flaticon-user"></i>
                        <span> SIGN IN </span>
                      </NavLink>
                    )}
          </ul>
        </div>
      </nav>

    </>
  );
};

const mapStateToProps = ({ auth }) => {
  return {
    auth,
  };
};

const mapDispatchToProps = {
  userLogOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);
