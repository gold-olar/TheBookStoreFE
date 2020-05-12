import React from "react";
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

const EditProfileForm = ({ handleEditProfile, user }) => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    if(data.confirmPassword !== data.newPassword){
      return toast.error(`Passwords don't match`)
    }
    return handleEditProfile(data);
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12 card p-3">
            <h3 className="pt-3 pb-3"> Edit Profile </h3>
            <form onSubmit={handleSubmit(onSubmit)} className="p-5">
              <div className="form-group">
                <label for="book title">Full Name </label>
                <input
                  type="text"
                  className="form-control"
                  ref={register({ required: true })}
                  name="fullName"
                  defaultValue={user.fullName}
                /> {errors.fulName && (
                  <span className="err-msg-dashboard text-left">
                    {" "}
                    This field is required.
                  </span>
                )}
              </div>
              <div className="form-group">
                <label for="book title">Email Address </label>
                <input
                  type="text"
                  className="form-control"
                  ref={register({ required: true })}
                  name="email"
                  defaultValue={user.email}
                />
                {errors.email && (
                  <span className="err-msg-dashboard text-left">
                    {" "}
                    This field is required.
                  </span>
                )}
              </div>
              <div className="form-group">
                <label for="book title">Old Password</label>
                <input
                  type="password"
                  className="form-control"
                  ref={register({ required: true })}
                  name="oldPassword"
                />
                {errors.oldPassword && (
                  <span className="err-msg-dashboard text-left">
                    {" "}
                    This field is required.
                  </span>
                )}
              </div>
              <div className="form-group">
                <label for="book title">New Password</label>
                <input
                  type="password"
                  className="form-control"
                  ref={register({ required: true })}
                  name="newPassword"
                />
                {errors.newPassword && (
                  <span className="err-msg-dashboard text-left">
                    {" "}
                    This field is required.
                  </span>
                )}
              </div>
              <div className="form-group">
                <label for="book title">Confirm New Password</label>
                <input
                  type="password"
                  className="form-control"
                  ref={register({ required: true })}
                  name="confirmPassword"
                />
                {errors.confirmPassword && (
                  <span className="err-msg-dashboard text-left">
                    {" "}
                    This field is required.
                  </span>
                )}
              </div>

              <button type="submit" className="boxed_btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfileForm;
