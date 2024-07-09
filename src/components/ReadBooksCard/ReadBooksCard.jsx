import PropTypes from 'prop-types';
import { CiLocationOn } from "react-icons/ci";
import { IoPeople } from "react-icons/io5";
import { RiPagesLine } from "react-icons/ri";
import { Link } from 'react-router-dom';


const ReadBooksCard = ({ readBook }) => {
    const { bookName, image, author, tags, yearOfPublishing, publisher, totalPages, category, rating } = readBook;
    return (
        <div className='flex gap-6 border border-[#13131326] p-6 mt-8 rounded-2xl'>
            <div className='bg-[#1313130D] rounded-2xl py-7 px-12'>
                <img src={image} className='w-[130px] h-[170px]' alt="" />
            </div>
            <div>
                <h1 className='text-[#131313] font-extrabold text-2xl playfairFont'>{bookName}</h1>
                <p className='text-[#131313CC] font-medium mt-4'>By: {author}</p>
                <div className='flex gap-4 mt-4'>
                    <div>
                        <span className='text-[#131313] font-extrabold mr-2'>Tag</span>
                        {
                            tags.map((tag, idx) => <span
                                className='text-[#23BE0A] font-medium bg-[#23BE0A0D] py-2 px-4 rounded-2xl'
                                key={idx}
                            >#{tag}</span>)
                        }
                    </div>
                    <div className='flex items-center gap-2 text-[#131313CC]'>
                        <CiLocationOn />
                        <p>Year of Publishing: {yearOfPublishing}</p>
                    </div>
                </div>
                <div className='flex gap-4 my-4'>
                    <div className='flex gap-2 items-center text-[#13131399]'>
                        <IoPeople />
                        <p>{publisher}</p>
                    </div>
                    <div className='flex gap-2 items-center text-[#13131399]'>
                        <RiPagesLine />
                        <p>Page {totalPages}</p>
                    </div>
                </div>
                <hr />
                <div className='flex gap-4 mt-7'>
                    <p className='bg-[#328EFF26] text-[#328EFF] py-3 px-5 rounded-3xl'>Category: {category}</p>
                    <p className='bg-[#FFAC3326] text-[#FFAC33] py-3 px-5 rounded-3xl'>Rating: {rating}</p>
                    <Link >
                        <button className='bg-[#23BE0A] text-white rounded-3xl py-2 px-5 font-medium text-lg'>View Details</button>
                    </Link>
                    {/* to={`/book/${bookId}`} */}
                </div>
            </div>
        </div>
    );
};

ReadBooksCard.propTypes = {
    readBook: PropTypes.object,
}

export default ReadBooksCard;