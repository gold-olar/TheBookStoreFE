import React from "react";
import Signup from "../../components/SignUp";
import "./styles.scss";
import { toast } from "react-toastify";
import validateSignUpData from "./helper";
import { connect } from "react-redux";
import { userSignUp } from "../../Actions/authActions";
import Loader from "../../components/Loader";

const SignUpSection = (props) => {
  const handleSignup = async (data) => {
    try {
      const passwordCheck = await validateSignUpData(data);
      if (passwordCheck.status === true) {
        await props.userSignUp(data);
        toast.success("Sign Up Successful, Please Login.");
        props.history.push("/login");
      }

      return toast.error(passwordCheck.message);
    } catch (err) {
      toast.error(err.message);
    }
  };


  return (
    <div className="">
      {props.loading ? <Loader /> : <Signup handleSignup={handleSignup} />}
    </div>
  );
};
const mapStateToProps = ({ auth, apiCallsInProgress }) => {
  return {
    auth,
    loading: apiCallsInProgress > 0 ? true : false,
  };
};

const mapDispatchToProps = {
  userSignUp,
};
export default connect(mapStateToProps, mapDispatchToProps)(SignUpSection);
