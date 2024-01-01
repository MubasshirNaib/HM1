import Lottie from 'lottie-react';
import { Navigate, useLocation } from 'react-router-dom';
import loader from '../assets/food_bowl_loader.json';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  //   console.log(location.pathname);

  if (loading)
    return (
      <div className='flex items-center justify-center h-[500px] w-full'>
          <Lottie animationData={loader} className='w-[300px] h-[300px]' />
        </div>
    );
  else if (!user?.email) {
    return <Navigate state={location.pathname} to={'/login'} />;
  }

  return children;
};

export default PrivateRoute;
