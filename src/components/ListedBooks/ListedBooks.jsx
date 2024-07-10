import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";


const ListedBooks = () => {

    const [tabIndex, setTabIndex] = useState(0);

    return (
        <div>
            <div className="bg-[#1313130D] h-[100px] rounded-2xl text-[#131313] font-extrabold text-2xl flex items-center justify-center mt-9 mb-8">
                <h1 >Listed Books</h1>
            </div>

            <div className="flex justify-center mb-10 text-center">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn m-1 font-semibold text-lg bg-[#23BE0A] text-white">Sort By<RiArrowDropDownLine size='2em' /></div>
                    <ul tabIndex={0} className="dropdown-content menu rounded-box z-[1] w-52 p-2 shadow font-semibold">
                        <li><a>Rating</a></li>
                        <li><a>Number of pages</a></li>
                        <li><a>Published year</a></li>
                    </ul>
                </div>
            </div>


            <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden flex-nowrap dark:bg-gray-100 dark:text-gray-800">
                <Link
                    to=''
                    onClick={() => setTabIndex(0)}
                    className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 0 ? 'border border-b-0' : 'border-b'} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                    </svg>
                    <span>Read Books</span>
                </Link>
                <Link
                    to='wishlist'
                    onClick={() => setTabIndex(1)}
                    className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 1 ? 'border border-b-0' : 'border-b'} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                    </svg>
                    <span>Wishlist Books</span>
                </Link>
            </div>

            <Outlet></Outlet>
        </div>
    );
};

export default ListedBooks;