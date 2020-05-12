import React from "react";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./styles.scss";



const SignUp = ({ handleSignup }) => {

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    handleSignup(data);
  };

  return (
    <>
      <span id="test-form" className="white-popup-block mfp-hide mt-5">
        <div className="popup_box ">
          <div className="popup_inner">
            <h3>Sign up</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="row">
                <div className="col-xl-12 col-md-12">
                  {errors.fullName && (
                    <span className="err-msg text-left">
                      {" "}
                      FullName field is required.
                    </span>
                  )}
                  <input
                    type="text"
                    name="fullName"
                    ref={register({ required: true })}
                    placeholder="Enter Full Name"
                    autoComplete="false"
                  />
                </div>
                <div className="col-xl-12 col-md-12">
                  {errors.email && (
                    <span className="err-msg text-left">
                      {" "}
                      Email field is required.
                    </span>
                  )}
                  <input
                    autoComplete="false"
                    type="email"
                    name="email"
                    ref={register({ required: true })}
                    placeholder="Email Address"
                  />
                </div>
                <div className="col-xl-12 col-md-12">
                  {errors.password && (
                    <span className="err-msg text-left">
                      {" "}
                      Password field is required.
                    </span>
                  )}
                  <input
                   autoComplete="false"
                    type="password"
                    name="password"
                    ref={register({ required: true })}
                    placeholder="Password"
                  />
                </div>
                <div className="col-xl-12 col-md-12">
                  {errors.confirmPassword && (
                    <span className="err-msg text-left">
                      {" "}
                      Confirm Password field is required.
                    </span>
                  )}
                  <input
                    autoComplete="false"
                    type="password"
                    name="confirmPassword"
                    ref={register({ required: true })}
                    placeholder="Confirm Password"
                  />
                </div>
                <div className="col-xl-12">
                  <button type="submit" className="boxed_btn_orange">
                    Sign Up
                  </button>
                </div>
              </div>
            </form>
            <p className="doen_have_acc">
              Have an account?{" "}
              <NavLink to="/login" className="dont-hav-acc">
                Sign In
              </NavLink>
            </p>
          </div>
        </div>
      </span>
    </>
  );
};

export default SignUp;
