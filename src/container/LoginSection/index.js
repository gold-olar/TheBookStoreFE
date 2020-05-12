import React, { useEffect } from "react";
import Login from "../../components/Login";
import "./styles.scss";
import { toast } from "react-toastify";
import { connect } from "react-redux";
import { userLogin, persistUser } from "../../Actions/authActions";
import { Redirect } from "react-router-dom";
import Loader from "../../components/Loader";

const LoginSection = (props) => {
  useEffect(() => {
    props.persistUser();
  }, [props]);
  const handleLogin = async (data) => {
    try {
      await props.userLogin(data);
      toast.success("Login Successful.");
      props.history.push("/library");
    } catch (err) {
      toast.error(err.message);
    }
  };

  if (props.auth.token) {
    return <Redirect to="/library" />;
  }

  return (
    <div className="">
      {props.loading ? <Loader /> : <Login handleLogin={handleLogin} />}
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
  userLogin,
  persistUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginSection);
