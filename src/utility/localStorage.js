import toast from 'react-hot-toast';


export const getReadBooks = () => {
    let books = [];
    const storedReadBooks = localStorage.getItem('read-books');
    if (storedReadBooks) {
        books = JSON.parse(storedReadBooks);
    }
    return books;
}

export const getWishlistBooks = () => {
    let books = [];
    const storedWishlistBooks = localStorage.getItem('wishlist-books');
    if (storedWishlistBooks) {
        books = JSON.parse(storedWishlistBooks);
    }
    return books;
}



export const addBookToRead = book => {
    let readBooks = getReadBooks();
    let wishlistBooks = getWishlistBooks();

    const isReadBookExist = readBooks.find(b => b.bookId === book.bookId);
    const isWishlistBookExist = wishlistBooks.find(b => b.bookId === book.bookId);

    if (isReadBookExist) {
        toast.error('Already added to read books');
    }
    else if (isWishlistBookExist) {
        toast.error('This book is already in the wishlist.');
    }
    else {
        readBooks.push(book);
        localStorage.setItem('read-books', JSON.stringify(readBooks));
        toast.success('Book added to read books');
    }
}

export const addBookToWishlist = book => {
    let readBooks = getReadBooks();
    let wishlistBooks = getWishlistBooks();

    const isReadBookExist = readBooks.find(b => b.bookId === book.bookId);
    const isWishlistBookExist = wishlistBooks.find(b => b.bookId === book.bookId);

    if (isWishlistBookExist) {
        toast.error('Already added to wishlist');
    }
    else if (isReadBookExist) {
        toast.error('This book is already in the read books.');
    }
    else {
        wishlistBooks.push(book);
        localStorage.setItem('wishlist-books', JSON.stringify(wishlistBooks));
        toast.success('Book added to wishlist');
    }
}



// export const deleteBook = id => {
//     let books = getBooks()
//     const remaining = books.filter(b => b.id !== id)
//     localStorage.setItem('books', JSON.stringify(remaining))
//     toast.success('Book Removed from Bookmark!')
// }

