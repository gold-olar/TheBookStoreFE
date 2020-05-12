import React from "react";
import { NavLink } from "react-router-dom";
const AboutSection = () => {
  return (
    <>
      <div className="about_area">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-6">
              <div className="single_about_info">
                <h3>
                  Over 700 Books <br />
                  from 20 Authors
                </h3>
                <p>
                  Our set he for firmament morning sixth subdue darkness
                  creeping gathered divide our let god moving. Moving in fourth
                  air night bring upon you’re it beast let you dominion likeness
                  open place day great wherein heaven sixth lesser subdue fowl{" "}
                </p>
                <NavLink to="/signup" className="boxed_btn">
                  Review a Book
                </NavLink>
              </div>
            </div>
            <div className="col-xl-6 offset-xl-1 col-lg-6">
              <div className="about_tutorials">
                <div className="courses">
                  <div className="inner_courses">
                    <div className="text_info">
                      <span>700+</span>
                      <p> Books</p>
                    </div>
                  </div>
                </div>
                <div className="courses-blue">
                  <div className="inner_courses">
                    <div className="text_info">
                      <span>50+</span>
                      <p> Reviews</p>
                    </div>
                  </div>
                </div>
                <div className="courses-sky">
                  <div className="inner_courses">
                    <div className="text_info">
                      <span>20+</span>
                      <p> Authors</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
