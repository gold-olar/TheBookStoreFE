import React from "react";
import { useForm } from "react-hook-form";

const Search = ({setSearchText}) => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    setSearchText(data.searchParam);
  };
  return (
    <>
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-md-6 m-auto">
            <form onSubmit={handleSubmit(onSubmit)} className="m-3">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search Books..."
                aria-label="Search"
                name="searchParam"
                ref={register({ required: true })}
              />
              {errors.searchParam && (
                <span className=" err-msg-dashboard text-left">
                  {" "}
                  A search param is required.
                </span>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
