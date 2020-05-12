import React from "react";
import Header from "../../components/Header";
import PopularBooks from '../PopularBooks';
import SubScribeSection from "../SubScribeSection";
import RecentsSection from "../RecentsSection";
import SearchSection from "../SearchSection";



const LandingPage = () => {
  return (
    <>
        <Header/>
        <SearchSection/>
        <PopularBooks />
        <RecentsSection/>
        <SubScribeSection/>
     </>
  );
};

export default LandingPage;
