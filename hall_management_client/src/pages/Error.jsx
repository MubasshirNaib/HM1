import Lottie from 'lottie-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import notFound from '../assets/404.json';
const Error = () => {
  return (
    <>
      <Helmet>
        <title>RegFood | Page not Found</title>
      </Helmet>
      <div className='px-5 my-5'>
        <Link className='text-white bg-primary px-4 py-2' to={'/'}>
          Home
        </Link>
      </div>
      <div className='flex items-center h-screen justify-center'>
        <Lottie className='w-[50%]' animationData={notFound} />
      </div>
    </>
  );
};

export default Error;
