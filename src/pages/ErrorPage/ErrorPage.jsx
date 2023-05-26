import { Link, useRouteError } from 'react-router-dom';
import Lottie from "lottie-react";
import errorPage from '../../assets/98488-bot-error-404.json'
import useTitle from '../../hooks/useTitle';
const ErrorPage = () => {
    // eslint-disable-next-line no-unused-vars
    const { error, status } = useRouteError()
    useTitle("Error")
    return (
        <section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
        <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
        <Lottie animationData={errorPage} loop={true} />;
          <div className='max-w-md text-center'>
            <p className='text-2xl font-semibold md:text-3xl text-red-800 mb-8'>
              {error?.message}
            </p>
            <Link to='/' className='btn'>
              Back to homepage
            </Link>
          </div>
        </div>
      </section>
    );
};

export default ErrorPage;