import React from 'react';
import illustration from "../../assets/img/landing_illus.png"
import './styles.scss';


const Header = () => {
    return ( 
        <>
        <div className="slider_area ">
        <div className="single_slider d-flex align-items-center justify-content-center slider_bg_1">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-xl-6 col-md-6">
                <div className="illastrator_png">
                  <img src={illustration} alt="headpic" />
                </div>
              </div>
              <div className="col-xl-6 col-md-6">
                <div className="slider_info">
                  <h3>
                    Learn about your <br />
                    Favorite Books <br />
                    From our website
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </>
     );
}
 
export default Header;