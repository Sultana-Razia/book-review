import { CiStar } from "react-icons/ci";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const Book = ({ book }) => {
    const { bookId, image, bookName, author, category, rating, tags } = book
    return (
        <Link to={`/book/${bookId}`}>
            <div className="w-[374px] h-[481px] border rounded-2xl p-6">
                <div className="card shadow-xl">
                    <figure className="w-[326px] h-[230px] bg-[#F3F3F3] rounded-2xl">
                        <img
                            className="w-[134px] h-[166px]"
                            src={image}
                            alt="Book" />
                    </figure>
                    <div className="card-body mt-6 pt-0 h-[180px]">
                        <div className="text-[#23BE0A] font-medium text-base">
                            {tags.map((tag, idx) => <span key={idx} className="bg-[#23BE0A0D] text-xs rounded-3xl py-1 px-4">{tag}</span>)
                            }
                        </div>
                        <h2 className="card-title text-[#131313] playfairFont font-bold py-2">
                            {bookName}
                        </h2>
                        <p className="text-[#131313CC] font-medium mb-3">By: {author}</p>
                        <div className="card-actions justify-between text-[#131313CC] font-medium">
                            <div className="">{category}</div>
                            <div className="flex items-center gap-1">{rating} <CiStar /></div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

Book.propTypes = {
    book: PropTypes.object,
}

export default Book;