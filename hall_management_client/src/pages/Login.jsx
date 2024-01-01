import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import useAxios from '../hooks/useAxios';
const Login = () => {
  const admin_email = 'admin@gmail.com';
  const admin_password = '123';
  const axios = useAxios();
  const { login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const [email, setEmail] = useState('s@gmail.com');
  const [password, setPassword] = useState('1234#A');

  const location = useLocation();
  console.log('from login ', location.state);

  const handleLogin = (e) => {
    setError('');
    e.preventDefault();
    const form = e.target;

    const id = toast.loading('Login please wait...');

    login(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success('Login successful', { id: id });
        navigate(location?.state ? location?.state : '/');
      })
      .catch((error) => {
        setError(error.message);
        toast.error(error.message, { id: id });
      });
  };
  const handleAdminLogin = (e) => {
    navigate('/admin');
  };

  return (
    <div
      className='min-h-screen flex justify-center items-center px-2 '
      style={{
        backgroundImage: `url('${''}')`,
        backgroundSize: 'cover',
      }}
    >
      <Helmet>
        <title>Hall-Management | Login</title>
      </Helmet>
      <div className=' bg-white  w-[400px] mx-auto shadow-xl rounded-md p-10 space-y-5'>
        <p className='text-xl font-semibold'>Sign In</p>
        <form className='space-y-4'>
          <input
            className='border px-4 py-2 w-full rounded-md'
            placeholder='Your email'
            type='email'
            required
            onBlur={(e) => setEmail(e.target.value)}
          />
          <input
            className='border px-4 py-2 w-full rounded-md'
            type='password'
            required
            placeholder='Your password'
            onBlur={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={
              email === admin_email && password === admin_password
                ? handleAdminLogin
                : handleLogin
            }
            className='w-full bg-green-500 text-white py-2 rounded-md'
            type='button'
          >
            Sign In
          </button>
          <p className='text-sm text-red-800'>{error}</p>
          <p>
            Don't have an accout?
            <Link className='underline' to={'/register'}>
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
