import React from "react";
import { Link } from "react-router-dom";


const NewRecentCard = ({title, imageUrl, published, pages, bookIndexRange, category, id, link }) => {
  return (
    <>
      <div className="col-md-4 col-6 my-3">
        <div className="card">
          <img className="card-img-top" style={{maxHeight: '300px'}} src={imageUrl} alt="cap"/>
          <div className="card-body">
            <Link to={link} > <h5 className="card-title"> {title} <br/>  </h5></Link>
             
            <p className="card-text">
              This book was published in {published}, and has about {pages} pages.
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewRecentCard;