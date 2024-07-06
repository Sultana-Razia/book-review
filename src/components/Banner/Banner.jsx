import bannerImage from '../../assets/bannerImage.png';

const Banner = () => {

    return (
        <div className="bg-[#1313130D] rounded-3xl flex flex-col md:flex-row py-20 gap-20 justify-center items-center mt-12">
            <div>
                <h1 className="text-[#131313] font-bold text-4xl md:text-5xl playfairFont leading-loose">Books to freshen <br />up your bookshelf</h1>
                <button className="bg-[#23BE0A] text-white text-xl font-bold py-5 px-7 rounded-lg mt-12">View The List</button>
            </div>
            <div>
                <img className='' src={bannerImage} alt="" />
            </div>
        </div>
    );
};

export default Banner;