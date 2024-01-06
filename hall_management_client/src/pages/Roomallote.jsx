import React, { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';
import useAxios from '../hooks/useAxios';
import '../hooks/useAuth.jsx';

const Roomallote = () => {
  const axios = useAxios();
  const { user } = useAuth();
  const [roommembers, setRoommembers] = useState('');
  const [id1, setId1] = useState('');
  const[id2,setId2]=useState('');
  const[id3,setId3]=useState('');
  const[id4,setId4]=useState('');
  const[room1,setRoom1]=useState('');
  const[room2,setRoom2]=useState('');
  const[room3,setRoom3]=useState('');
  const[prevrn,setPrevrn]=useState('');
  const muba={
    name: user?.displayName,
    email: user?.email,
    roommembers,
    id1,id2,id3,id4,room1,room2,room3,
    prevrn,
  };
  const handleSubmit = async (e) =>{
    e.preventDefault();
    console.log("Mubasshir",muba)

    try {
      axios
        .post('/roomusers', muba)
        .then((response) => {
          console.log(response.data);
          alert('Application Received !!');
        })
        .catch((error) => {
          console.log(error.message);
        });
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className='container pt-6 max-w-lg mx-auto xl:max-w-6xl h-full  flex bg-white rounded-lg shadow overflow-hidden'>
      <div className='relative hidden xl:block xl:w-1/2 h-full'>
        <img
          className='absolute  w-full object-cover'
          src='https://i.ibb.co/gwbb19h/IMG20231208114152.jpg'
          alt='my zomato'
          style={{ width: '100%', height: '160vh' }}
        />
      </div>
      <div className='w-full xl:w-1/2 p-8 '>
        <h1 className='text-2xl font-bold ml-16'>Room Allotment</h1>
        <form onSubmit={handleSubmit}>
          <div className='mb-4 mt-4'>
            <h1>Name:{user?.displayName} </h1>
          </div>
          <div className='mb-4 mt-2'>Email:{user?.email}</div>
          <div className='mb-2 mt-2 flex'>
            <div className='mr-6 mt-2'>Room Members:</div> 
            <div className='ml-4 mt-0'>
              <select
                className='select select-bordered mt-1'
                onChange={(e) => setRoommembers(e.target.value)}
              >
                <option disabled selected>
                  Select
                </option>
                <option>3</option>
                <option>4</option>
              </select>
            </div>
          </div>
          <div className='mb-4 mt-2'>Provide Student Id:</div>
          <div class="relative z-0 w-full mb-5 group">
             <input type="text" name="id1" id="id1" value={id1} 
             onChange={(e) => setId1(e.target.value)} class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
             <label for="id1" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">ID 01:</label>
          </div>
          <div class="relative z-0 w-full mb-5 group">
             <input type="text" name="id2" id="id2" value={id2}
             onChange={(e) => setId2(e.target.value)} class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
             <label for="id2" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">ID 02:</label>
          </div>
          <div class="relative z-0 w-full mb-5 group">
             <input type="text" name="id3" id="id3" value={id3} 
             onChange={(e) => setId3(e.target.value)} class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
             <label for="id3" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">ID 03:</label>
          </div>
          <div class="relative z-0 w-full mb-5 group">
             <input type="text" name="id4" id="id4" value={id4} 
             onChange={(e) => setId4(e.target.value)} class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
             <label for="id4" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">ID 04:</label>
          </div>
          <div className='mb-4 mt-2'>Provide Room No:</div>
          <div class="relative z-0 w-full mb-5 group">
             <input type="text" name="room1" id="room1" value={room1} 
             onChange={(e) => setRoom1(e.target.value)} class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
             <label for="room1" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Choice No 1:</label>
          </div>
          <div class="relative z-0 w-full mb-5 group">
             <input type="text" name="room2" id="room2" value={room2}
             onChange={(e) => setRoom2(e.target.value)} class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
             <label for="room2" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Choice No 2:</label>
          </div>
          <div class="relative z-0 w-full mb-5 group">
             <input type="text" name="room3" id="room3" value={room3}
             onChange={(e) => setRoom3(e.target.value)} class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
             <label for="room3" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Choice No 3:</label>
          </div>
          <div class="relative z-0 w-full mb-5 group">
             <input type="text" name="prevrn" id="prevrn" value={prevrn}
             onChange={(e) => setPrevrn(e.target.value)} class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
             <label for="prevrn" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Previous Room No:</label>
          </div>
          <div className='flex w-full mt-8'>
            <button
              className='w-full bg-gray-800 hover:bg-red-900 text-white text-sm py-2 px-4 font-semibold rounded focus:outline-none focus:shadow-outline h-10'
              type='submit'
            >
              Apply
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Roomallote;