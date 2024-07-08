import { useLoaderData, useParams } from "react-router-dom";


const BookDetails = () => {
    const books = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const book = books.find(book => book.bookId === idInt);
    console.log(book);


    return (
        <div className="flex flex-col md:flex-row gap-12 mt-12 justify-center">
            <div className="bg-[#1313130D] rounded-2xl p-20">
                <img src={book.image} alt="Book Name" />
            </div>
            <div className="w-[50%]">
                <h1 className="text-[#131313] font-bold text-4xl playfairFont mb-5">{book.bookName}</h1>
                <p className="text-[#131313CC] font-medium text-xl mb-5">By: {book.author}</p>
                <hr />
                <p className="text-[#131313CC] font-medium text-xl my-4">{book.category}</p>
                <hr />
                <p className="text-[#131313B3] font-medium mt-5"><span className="text-[#131313] font-bold">Review: </span>{book.review}</p>
                <div className="text-[#23BE0A] font-medium my-5">
                    <span className="text-[#131313] font-bold">Tag</span>
                    {book.tags.map((tag, idx) => <span key={idx} className="bg-[#23BE0A0D] rounded-3xl py-1 px-4">#{tag}</span>)
                    }
                </div>

                <hr />

                <div className="overflow-x-auto mt-6">
                    <table className="table">
                        <tbody>
                            {/* row 1 */}
                            <tr>
                                <td>Number of Pages:</td>
                                <td className="text-[#131313] font-semibold">{book.totalPages}</td>
                            </tr>
                            {/* row 2 */}
                            <tr>
                                <td>Publisher:</td>
                                <td className="text-[#131313] font-semibold">{book.publisher}</td>
                            </tr>
                            {/* row 3 */}
                            <tr>
                                <td>Year of Publishing:</td>
                                <td className="text-[#131313] font-semibold">{book.yearOfPublishing}</td>
                            </tr>
                            {/* row 4 */}
                            <tr>
                                <td>Rating:</td>
                                <td className="text-[#131313] font-semibold">{book.rating}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="flex gap-4 mt-8">
                    <button className="text-[#131313] border-2 border-[#1313134D] font-semibold text-lg py-4 px-7 rounded-lg">Read</button>
                    <button className="bg-[#50B1C9] text-white font-semibold text-lg py-4 px-7 rounded-lg">Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;