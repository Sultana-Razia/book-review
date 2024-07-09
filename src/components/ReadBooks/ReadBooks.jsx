import { useEffect, useState } from "react";
import { getReadBooks } from "../../utility/localStorage";
import ReadBooksCard from "../ReadBooksCard/ReadBooksCard";


const ReadBooks = () => {
    const [readBooks, setReadBooks] = useState([]);

    useEffect(() => {
        const storedReadBooks = getReadBooks();
        setReadBooks(storedReadBooks);
    }, [])

    return (
        <div>
            {
                readBooks.map(readBook => <ReadBooksCard
                    key={readBook.bookId}
                    readBook={readBook}></ReadBooksCard>)
            }
        </div>
    );
};

export default ReadBooks;