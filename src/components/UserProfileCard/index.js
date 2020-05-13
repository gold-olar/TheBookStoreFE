import React from "react";
import Img from "react-cool-img";

const UserProfileCard = (props) => {
  const { user } = props;
  return (
    <>
      <div className=" col-md-12 card pt-3 pb-5">
        <div className="panel widget">
          <div className="widget-header bg-success"></div>
          <div className="widget-body text-center">
            <Img
              style={{ backgroundColor: "grey" }}
              alt="Profile"
              className="widget-img img-circle img-border mb-3"
              src="https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/profle-512.png"
            />
            <h4 className="mar-no"> {user?.fullName} </h4>
            <p className="text-muted mar-btm"> {user?.email}</p>

            {/* <div className="pad-ver mt-3">
              <button
                onClick={() => setShowEditProfileForm(!showEditProfileForm)}
                className="boxed_btn_rev"
              >
                {showEditProfileForm ? "Create Review" : "Edit Profile"}
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfileCard;
