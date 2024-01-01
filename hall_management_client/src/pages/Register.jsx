import { updateProfile } from 'firebase/auth';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { auth } from '../providers/AuthProvider';
import useAxios from './../hooks/useAxios';
const Register = () => {
  const axios = useAxios();
  const { createUser } = useAuth();
  const [error, setError] = useState([]);
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [image, setImage] = useState('');
  const [ID, setID] = useState('');

  const handleRegister = async (e) => {
    setError([]);
    e.preventDefault();

    const form = e.target;

    const userData = {
      name,
      email,
      image,
      ID,
    };

    if (password.length < 6) {
      setError((prevErrors) => [
        ...prevErrors,
        'Password must be at least 6 characters',
      ]);
    }

    if (!/[A-Z]/.test(password)) {
      setError((prevErrors) => [
        ...prevErrors,
        'Password must contain at least one capital letter',
      ]);
    }

    if (!/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(password)) {
      setError((prevErrors) => [
        ...prevErrors,
        'Password must contain at least one special character',
      ]);
    }

    console.log(error);

    if (error.length > 0) {
      return;
    } else {
      const id = toast.loading('Creating user');
      createUser(email, password)
        .then((result) => {
          console.log(result.user);
          updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image,
          });
          toast.success('Registration successful', { id: id });
          // store users
          axios
            .post('/users', userData)
            .then((response) => {
              console.log(response.data);
            })
            .catch((error) => {
              console.log(error.message);
            });
          navigate('/login');
        })
        .catch((err) => {
          console.log(err);
        });
    }
    form.reset();
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
        <title>Hall-Management | Register</title>
      </Helmet>
      <div className=' bg-white  w-[400px] mx-auto shadow-xl rounded-md p-10 space-y-5'>
        <p className='text-xl font-semibold'>Register</p>
        <form onSubmit={handleRegister} className='space-y-4'>
          <input
            className='border px-4 py-2 w-full rounded-md'
            type='name'
            onBlur={(e) => setName(e.target.value)}
            required
            placeholder='Your name'
          />
          <input
            className='border px-4 py-2 w-full rounded-md'
            placeholder='Your email'
            type='email'
            required
            onBlur={(e) => setEmail(e.target.value)}
          />
          <input
            className='border px-4 py-2 w-full rounded-md'
            placeholder='Your ID'
            type='number'
            required
            onBlur={(e) => setID(e.target.value)}
          />
          <input
            className='border px-4 py-2 w-full rounded-md'
            type='text'
            onBlur={(e) => setImage(e.target.value)}
            required
            placeholder='Your image link'
          />
          <input
            className='border px-4 py-2 w-full rounded-md'
            type='password'
            onBlur={(e) => setPassword(e.target.value)}
            required
            placeholder='Your password'
          />
          <p className='text-red-800 text-sm'>{error[0] ? error[0] : ''}</p>
          <p className='text-red-800 text-sm'>{error[1] ? error[1] : ''}</p>
          <p className='text-red-800 text-sm'>{error[2] ? error[2] : ''}</p>
          <button
            className='w-full bg-green-500 text-white py-2 rounded-md'
            type='submit'
          >
            Register
          </button>
          <div className='divider'>Or</div>
          <p>
            Already have an accout?
            <Link className='underline' to={'/login'}>
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
