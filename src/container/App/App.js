import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LandingPage from "../LandingPage";
import NavigationBar from "../../components/NavigationBar";
import LoginSection from "../LoginSection";
import SignUpSection from "../SignUpSection";
import BookeviewsPage from "../BookeviewsPage";
import Footer from "../../components/Footer";
import BooksPage from "../BooksPage";
import ScrollIntoView from "../ScrollIntoView";
import { Provider } from "react-redux";
import Store from "../../Store";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.scss";
import DashboardPage from "../DashboardPage";
import SingleBookReview from '../SingleBookReviewPage';
import NotFound from "../NotFound";
import SingleBookPage from "../SingleBookPage";
import SingleSearchBook from '../SingleSearchBook';


toast.configure({
  autoClose: 2000,
  draggable: true,
  hideProgressBar: true,
});

function App() {
  return (
    <Provider store={Store()}>
      <BrowserRouter basename="/">
          <ScrollIntoView>
            <NavigationBar />
            <Switch>
              <Route path="/" exact component={LandingPage} />
              <Route path="/login" exact component={LoginSection} />
              <Route path="/signup" exact component={SignUpSection} />
              <Route path="/search/books/:bookId" exact component={SingleSearchBook} />
              <Route path="/books/:index/:category/:bookId" exact component={SingleBookPage} />
              <Route path="/books" exact component={BooksPage} />
              <Route path="/book_reviews/:bookId" exact component={SingleBookReview} />
              <Route path="/book_reviews" exact component={BookeviewsPage} />
              <Route path="/library" exact component={DashboardPage} />
              <Route path="*" exact component={NotFound} />
            </Switch>
            <Footer />
          </ScrollIntoView>
  
      </BrowserRouter>
    </Provider>
  );
}

export default App;
