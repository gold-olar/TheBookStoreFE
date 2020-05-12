import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { persistUser, editUserProfile } from "../../Actions/authActions";
import { createReview } from "../../Actions/reviewActions";
import "./styles.scss";
import BookReviewForm from "../../components/BookReviewForm";
import UserProfileCard from "../../components/UserProfileCard";
import EditProfileForm from "../EditProfileForm";
import getUserDetails from "./helper";
import Loader from "../../components/Loader";
import DashboardNav from "../../components/DashboardNav";
import SavedBooksList from "../../components/SavedBooksList";
import { toast } from "react-toastify";
import { fetchAllSavedBooks, deleteBook } from "../../Actions/savedBooksActions";

const NavLinks = ["Write Review", "Edit Profile", "Read Books", "Saved Books"];

const DashboardPage = (props) => {
  const [showEditProfileForm, setShowEditProfileForm] = useState(false);
  const [activeNav, setActiveNav] = useState(NavLinks[0]);
 

  const [user, setUserDetails] = useState({});

  const handleCreateReview = async (data) => {
    try {
      await props.createReview(data, props.auth.token);
      toast.success("Created Review");
    } catch (err) {
      toast.error(err.message);
    }
  };

  const handleEditProfile = async (data) => {
    try {
      await props.editUserProfile(data, props.auth.token);
      toast.success("Profile Updated Successfully.");
      setShowEditProfileForm(false);
    } catch (err) {
      toast.error(err.message);
    }
  };

  const handleDeleteBook = async (bookId) => {
    try {
      const bookData ={
        bookId,
      }
      await props.deleteBook(bookData, props.auth.token);
      toast.success('Book has been deleted');
    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    setUserDetails(getUserDetails(props.auth.token));
    // props.fetchAllSavedBooks(props.auth.token)
  }, [props.auth.token]);

  useEffect(() => {
    props.fetchAllSavedBooks(props.auth.token);
  }, [props.auth.token]);


  if (!props.auth.token) {
    props.persistUser();
    return <Redirect to="/login" />;
  }

  

  
  return (
    <>
      <div className=""></div>
      <>
        <div className="container-fluid p-4 pb-5">
          <div className="row">
            <div className="col-md-3 col-sm-12  p-3 my-5">
              <UserProfileCard
                setShowEditProfileForm={setShowEditProfileForm}
                showEditProfileForm={showEditProfileForm}
                user={user}
              />
                
              <DashboardNav
                NavLinks={NavLinks}
                activeNav={activeNav}
                setActiveNav={setActiveNav}
                token={props.auth.token} 
                fetchAllSavedBooks={props.fetchAllSavedBooks}

              />
            </div>

            {props.loading ? (
              <div className="dashboard-loader">
                <Loader />
              </div>
            ) : (
              <>
                <div className="col-md-9 col-sm-12 p-3">
                  {activeNav === NavLinks[0] && (
                    <BookReviewForm handleCreateReview={handleCreateReview} />
                  )}
                  {activeNav === NavLinks[1] && (
                    <EditProfileForm
                      handleEditProfile={handleEditProfile}
                      user={user}
                    />
                  )}

                  {activeNav === NavLinks[2] && (
                    <SavedBooksList deleteBook={handleDeleteBook}  title = "Read Books" books={props.savedBooks} />
                  )}

                   {activeNav === NavLinks[3] && (
                    <SavedBooksList deleteBook={handleDeleteBook}   title="Saved Books" books={props.savedBooks} />
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </>
    </>
  );
};

const mapStateToProps = ({ auth, apiCallsInProgress, savedBooks }) => {
  return {
    auth,
    loading: apiCallsInProgress > 0 ? true : false,
    savedBooks,
  };
};
const mapDispatchToProps = {
  persistUser,
  createReview,
  editUserProfile,
  fetchAllSavedBooks,
  deleteBook,
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
