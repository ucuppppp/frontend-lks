import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div className="flex justify-center min-h-screen items-center items-center flex-col">
            <h1 className="text-3xl font-bold mb-2 text-blue-600">Ooops!</h1>
            <p className="font-medium text-slate-500 mb-1">Sorry, an unexpected error has occurred.</p>
            <p className="font-medium text-slate-500 mb-4">{error.statusText || error.message}</p>
        </div>
    )
}

export default ErrorPage