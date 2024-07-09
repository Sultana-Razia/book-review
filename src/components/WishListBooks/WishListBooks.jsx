import { useEffect, useState } from "react";
import { getWishlistBooks } from "../../utility/localStorage";
import WishlistBooksCard from "../WishlistBooksCard/WishlistBooksCard";


const WishListBooks = () => {
    const [wishlistBooks, setWishlistBooks] = useState([]);

    useEffect(() => {
        const storedWishlistBooks = getWishlistBooks();
        setWishlistBooks(storedWishlistBooks);
    }, [])

    return (
        <div>
            {
                wishlistBooks.map(wishlistBook => <WishlistBooksCard
                    key={wishlistBook.bookId}
                    wishlistBook={wishlistBook}
                ></WishlistBooksCard>)
            }
        </div>
    );
};

export default WishListBooks;