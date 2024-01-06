import React, { useEffect, useState } from 'react';
import '../hooks/useAuth.jsx';
import useAuth from '../hooks/useAuth.jsx';
import useAxios from '../hooks/useAxios.jsx';
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
const Complain = () => {
    const axios = useAxios();
    const { user } = useAuth();
    const [hallfee, setHallfee] = useState(null);
    const [complain, setComplain] = useState('');
   
    useEffect(() => {
        axios
          .get(`/users/${user?.email}`)
          .then((data) => {
            console.log(data.data);
            return setHallfee(data.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);
        const handleMailButtonClick = () => {
         alert('Mail to: abc@gmail.com')
        };
        const Naib={
            Name: user?.displayName,
            Email: user?.email,
            ID: hallfee?.ID,
            complain,
        };
        const handleSubmit = async (e) =>{
            e.preventDefault();
            console.log("Muba",Naib);
            try {
                axios
                  .post('/complains', Naib)
                  .then((response) => {
                    console.log(response.data);
                    alert('Complain Received and Action will be Taken Soon.Thanks.');
                  })
                  .catch((error) => {
                    console.log(error.message);
                  });
              } catch (e) {
                console.log(e);
              }
        }
  return (
    <div className='container pt-6 max-w-lg mx-auto xl:max-w-4xl h-full  flex bg-white rounded-lg shadow overflow-hidden'>
      <div className='relative hidden xl:block xl:w-1/2 h-full'>
        <img
          className='absolute  w-full object-cover'
          src='https://i.ibb.co/BK2rsgq/IMG20231208114205.jpg'
          alt='my zomato'
          style={{ width: '100%', height: '120vh' }}
        />
      </div>
      <div className='w-full xl:w-1/2 p-8 '>
        <h1 className='text-2xl font-bold ml-16'>Complains</h1>
        <form onSubmit={handleSubmit}>
          <div className='mb-4 mt-6'>
            <h1>Name: {user?.displayName}</h1>
          </div>
          <div className='mb-4 mt-4'>Email:{user?.email}</div>
          <div className='mb-4 mt-4'>Student Id:{hallfee?.ID}</div>
          <div className='mb-4 mt-4'>
            <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
            <textarea id="message" rows="4" 
            required value={complain}
            onChange={(e) => setComplain(e.target.value)}
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your complains here..."></textarea>
          </div>
          <div className='flex w-full mt-8'>
            <button
              className='w-full bg-gray-800 hover:bg-red-900 text-white text-sm py-2 px-4 font-semibold rounded focus:outline-none focus:shadow-outline h-10'
              type='submit'
            >
              Submit
            </button>
           </div>
           </form>
           <div className='mb-4 mt-6'>For Emergency:</div>
          <div className="mb-0 mt-4 flex">
                <div className="mr-12"></div>
                <button className="header__btn btn  ">
                    <a className="flex" href="tel:01876531138">
                    <BsFillTelephoneFill/> <div className="ml-2"> Call  </div>
                    </a>
                </button>
                <button className="header__btn btn ml-6 " onClick={handleMailButtonClick}>
                    <a className="flex" href='https://mail.google.com/'>        
                    <IoIosMail /><div className="ml-2"> Email </div>
                    </a>
                </button>
          </div>
      </div>
    </div>
  )
}

export default Complain