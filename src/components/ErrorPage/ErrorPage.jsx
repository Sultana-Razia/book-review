import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="text-center mt-10">
            <h2 className="text-3xl font-bold">Page Not Found</h2>
            <Link to='/'><button className="btn mt-5 text-2xl">Back Home</button></Link>
        </div>
    );
};

export default ErrorPage;