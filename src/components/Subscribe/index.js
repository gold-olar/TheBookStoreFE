import React, {useState} from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { subscribeUser } from "../../Actions/subscribeAction";
import {toast} from 'react-toastify';

const SubscribeForm = (props) => {
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState (false);
  const onSubmit = async (data) => {
    if (!data.email) { return toast.error("Email is required") };
    setLoading(true)
    try {
      await props.subscribeUser(data);
      toast.success("Thank you for subscribing !..");
      return setLoading(false)
    } catch (err) {
      toast.error(err.message);
      return setLoading(false)
    }
    
  };
  return (
    <>
      {
        !props.subscribed  && (
          <div className="subscribe_newsletter">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6">
                <div className="newsletter_text">
                  <h3>Subscribe Newsletter</h3>
                </div>
              </div>
              <div className="col-xl-5 offset-xl-1 col-lg-6">
                <div className="newsletter_form">
                  <h4>Subscribe to get up to date information if new book has been released</h4>
                  <form onSubmit={handleSubmit(onSubmit)} className="newsletter_form">
                    <input type="email" 
                    name="email"
                    ref={register({ required: false })}
                    placeholder="Enter your mail" />
                    <button disabled ={loading ? true : false} type="submit"> {loading ? "Please wait" : 'Subscribe'}  </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      
        )
      }
    </>
  );
};

const mapStateToProps = ({ subscribed }) => {
  return {
    subscribed,
  };
};

const mapDispatchToProps = {
  subscribeUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(SubscribeForm);
