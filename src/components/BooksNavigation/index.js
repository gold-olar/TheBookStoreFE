import React from "react";
import { categories } from "./helper";
import {Link} from 'react-router-dom';


const BooksNavigation = ({activeCategory, setActiveCategory}) => {
  return (
    <>
      <div className="row">
        <div className="col-xl-12">
          <div className="course_nav">
            <nav>
              <ul className="nav" id="myTab" role="tablist">
                {categories.map((category) => (
                  <li className="nav-item">
                    <Link
                      className={
                        activeCategory === category ? "nav-link active" : "nav-link"
                      }
                      onClick={()=>{ setActiveCategory(category)}}
                      id="home-tab"
                      data-toggle="tab"
                      href="#home"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                     {category}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default BooksNavigation;
