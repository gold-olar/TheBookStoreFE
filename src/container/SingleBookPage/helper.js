export default (books, bookId) => {
   return  books.find((book) => book.id === bookId);
}