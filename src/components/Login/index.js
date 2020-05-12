import React from "react";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";



const Login = ({handleLogin}) => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    handleLogin(data);
  };
  return (
    <>
      <span id="test-form" className="white-popup-block mfp-hide mt-3">
        <div className="popup_box ">
          <div className="popup_inner">

            <h3>Login </h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="row">
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
                <div className="col-xl-12">
                  <button type="submit" className="boxed_btn_orange">
                    Log in
                  </button>
                </div>
              </div>
            </form>
            <p className="doen_have_acc">
              Don’t have an account?{" "}
              <NavLink to="/signup" className="dont-hav-acc">
                Sign Up
              </NavLink>
            </p>
          </div>
        </div>
      </span>
    </>
  );
};

export default Login;
