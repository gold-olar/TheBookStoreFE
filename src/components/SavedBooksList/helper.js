export default (books, title) => {
  const booksToBeRendered = [];
  if (books && title === "Read Books") {
    for (let i = 0; i < books.length; i++) {
      if (books[i].read === true) {
        booksToBeRendered.push(books[i]);
      }
    }
  } else if (books && title === "Saved Books") {
    for (let i = 0; i < books.length; i++) {
      if (books[i].read === false) {
        booksToBeRendered.push(books[i]);
      }
    }
  }

  return booksToBeRendered;
};
