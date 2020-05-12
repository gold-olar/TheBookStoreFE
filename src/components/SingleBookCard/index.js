import React from "react";

const SingleBookCard = ({
  title,
  imageUrl,
  authors,
  description,
  published,
  pages,
  id,
  previewLink,
  saveBook,
  saveBookAsRead,
}) => {
  return (
    <>

      <div className="card mb-3">
        <div className="container text-center my-auto">
        <img style={{ height: "300px", width:"100%" }} src={imageUrl} alt="Course Img" />
        </div>
        <div className="card-body text-center">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
        {description}
        </p>
        <p className="card-text"><small className="text-muted">
        {authors && (
                    <>
                      <b> Authors:</b>
                      <ul>
                        {authors.map((author) => (
                          <li key={author}> * {author} </li>
                        ))}
                      </ul>
                    </>
                  )}</small>
                  <a target="_blank" href={previewLink} rel="noopener noreferrer">
                    <button className="btn btn-primary"> Preview Book </button>
                  </a>
                  <button onClick={()=> saveBook(true)} className=" ml-3 btn btn-outline-secondary">
                    {" "}
                    Mark as read {" "}
                  </button>{" "}
                  <button onClick={()=> saveBook(false)} className=" ml-3 btn btn-secondary">
                    {" "}
                    Save Book{" "}
                  </button>{" "}
                  <br />
                  <br />
                  <small className="text-muted ">Published in ({published})</small>
                  <span className="active_prise float-right">{pages} pgs</span>
        </p>
        </div>
        </div>
        <hr/>
      
    </>
  );
};

export default SingleBookCard;
