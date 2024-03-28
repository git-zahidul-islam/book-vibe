import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError()
    return (
        <div className="flex flex-col justify-center items-center h-screen space-y-3">
            <h1 className="text-4xl font-bold">Oops!</h1>
            <p className="text-xl font-medium">Sorry, an unexpected error has occurred.</p>
            <p className="text-5xl font-medium text-red-500">404</p>
            <p className="text-xl"> {
                error.statusText || error.message
            } </p>
            <Link to={'/'}><button className="btn btn-error mt-4 text-white text-xl">Back To Home</button></Link>
        </div>
    );
};

export default ErrorPage;