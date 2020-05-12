import React from "react";
import "./styles.scss";


const DashboardNav = ({activeNav, setActiveNav, NavLinks}) => {
  
  return (
    <>
      <div className=" col-md-12 card pt-3 pb-5 mt-2">
        <div className="panel widget">
          <div className="widget-header bg-success"></div>
          <div className="widget-body text-center">
            {NavLinks.map((navLink) => (
                <span 
                onClick={ () => { setActiveNav(navLink)}}
              className={
                  activeNav === navLink ? " dashboard-nav-link active-nav" : " dashboard-nav-link"
              }>
                {" "}
                <i className="fas fa-facebook"></i> {navLink}{" "}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardNav;
