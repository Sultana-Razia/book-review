import { useEffect, useState } from "react";
import Book from "../Book/Book";


const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('books.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])

    return (
        <div>
            <h2 className="mt-24 text-[#131313] font-bold text-4xl text-center">Books</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center mt-10">
                {
                    books.map(book => <Book key={book.bookId} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;