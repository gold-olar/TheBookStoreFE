/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import { useForm } from "react-hook-form";
import {categories} from './helper';

const BookReviewForm = ({ handleCreateReview }) => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    handleCreateReview(data);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12 card p-3">
            <h3 className="pt-3 pb-3"> Create Book Review </h3>
            <form onSubmit={handleSubmit(onSubmit)} className="p-5">
              <div className="form-group">
                <label for="book title">Book Title </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Book Title"
                  ref={register({ required: true })}
                  name="bookTitle"
                />
                {errors.bookTitle && (
                  <span className="err-msg-dashboard text-left">
                    {" "}
                    Title field is required.
                  </span>
                )}
              </div>
              <div className="form-group">
                <label for="book title">Book Author </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Book Authors"
                  name="bookAuthor"
                  ref={register({ required: true })}
                />
                {errors.bookAuthor && (
                  <span className="err-msg-dashboard text-left">
                    {" "}
                    Author field is required.
                  </span>
                )}
              </div>
              <div className="form-group">
                <label for="rating"> Category </label>
                <select
                  ref={register({ required: true })}
                  name="category"
                  className="form-control"
                >
                  {
                    categories.map(category => (
                      <option key={category} value={category}>
                      {category}{" "}
                    </option>
                    ) )
                  }
                 
                </select>
              </div>
              <div className="form-group">
                <label for="rating"> Rating </label>
                <select
                  ref={register({ required: true })}
                  name="rating"
                  className="form-control"
                >
                  <option value="1"> ⭐ </option>
                  <option value="2"> ⭐⭐ </option>
                  <option value="3"> ⭐⭐⭐ </option>
                  <option value="4"> ⭐⭐⭐⭐ </option>
                  <option value="5"> ⭐⭐⭐⭐⭐ </option>
                </select>
              </div>

              <div className="form-group">
                <label for="">Description </label>
                <textarea
                  className="form-control"
                  placeholder="Book Review Description"
                  rows="3"
                  ref={register({ required: true })}
                  name="reviewContent"
                ></textarea>
                {errors.reviewContent && (
                  <span className="err-msg-dashboard text-left">
                    {" "}
                    Book Review descriptions is required.
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

export default BookReviewForm;
