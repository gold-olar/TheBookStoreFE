export const getBooksToShow = (books, booksToRender) => {
    return books.slice(1, booksToRender+1);
}

export const handleMoreBooksClick = (booksToShow, setBooksToShow, booksToFetch,setBooksToFetch,setLoading) => {
    if(booksToShow === booksToFetch){
        setBooksToFetch(booksToFetch * 2);
        // setLoading(true)
        return setBooksToShow(booksToShow + 3);
        // return setTimeout(setLoading(false), 2000);
    }
    return setBooksToShow(booksToShow + 3);
}