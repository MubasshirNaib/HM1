import React, { useEffect, useState } from 'react';
import '../hooks/useAuth.jsx';
import useAuth from '../hooks/useAuth.jsx';
import useAxios from '../hooks/useAxios.jsx';


const Form = () => {
  const axios = useAxios();
  const { user } = useAuth();
  const [hallfee, setHallfee] = useState(null);
  const [month1, setMonth1] = useState('');
  const [month2, setMonth2] = useState('');
  const [transaction, setTransaction] = useState('');
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

  const muba = {
    name: user?.displayName,
    email: user?.email,
    ID: hallfee?.ID,
    month1,
    month2,
    transaction,
  };

  const handleHallFee = async (e) => {
    e.preventDefault();
    console.log('hall fee', muba);
    // const id = toast.loading('please wait...');
    e.preventDefault();
    try {
      if(month1==""||month2==""||transaction==""){
        alert('Required field are empty!!');
      }else{
      axios
        .post('/hallfees', muba)
        .then((response) => {
          console.log(response.data);
          // toast.success('Submitted', { id: id});
          alert('Submitted Succesfully');
        })
        .catch((error) => {
          console.log(error.message);
        });}
    } catch (e) {
      console.log(e);
    }
  };

  // console.log('hall fee ', hallfee);

  return (
    <div className='container pt-6 max-w-lg mx-auto xl:max-w-3xl h-full  flex bg-white rounded-lg shadow overflow-hidden'>
      <div className='relative hidden xl:block xl:w-1/2 h-full'>
        <img
          className='absolute  w-full object-cover'
          src='https://i.ibb.co/gwbb19h/IMG20231208114152.jpg'
          alt='my zomato'
          style={{ width: '100%', height: '95vh' }}
        />
      </div>
      <div className='w-full xl:w-1/2 p-8 '>
        <h1 className='text-2xl font-bold ml-16'>Hall Fee</h1>
        <form method='post' action='#' onSubmit={() => false}>
          <div className='mb-4 mt-6'>
            <h1>Name: {user?.displayName}</h1>
          </div>
          <div className='mb-4 mt-4'>Email:{user?.email}</div>
          <div className='mb-4 mt-4'>Student Id:{hallfee?.ID}</div>
          <div className='mb-4 mt-4'>Month:</div>
          <div className='mb-6 mt-4 flex '>
            <div>
              <select
                className='select select-bordered '
                onChange={(e) => setMonth1(e.target.value)}
              >
                <option disabled selected>
                  From
                </option>
                <option>January</option>
                <option>February</option>
                <option>March</option>
                <option>April</option>
                <option>May</option>
                <option>June</option>
                <option>July</option>
                <option>August</option>
                <option>September</option>
                <option>October</option>
                <option>November</option>
                <option>December</option>
              </select>
            </div>
            <div className='pl-6'>
              <select
                className='select select-bordered '
                onChange={(e) => setMonth2(e.target.value)}
              >
                <option disabled selected>
                  To
                </option>
                <option>January</option>
                <option>February</option>
                <option>March</option>
                <option>April</option>
                <option>May</option>
                <option>June</option>
                <option>July</option>
                <option>August</option>
                <option>September</option>
                <option>October</option>
                <option>November</option>
                <option>December</option>
              </select>
            </div>
          </div>
          <div className='mb-6 mt-6'>
            <label
              className='block text-gray-700 text-sm font-semibold mb-2'
              htmlFor='password'
            >
              Transaction Id:
            </label>
            <input
              className='text-sm bg-gray-200 appearance-none rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline h-10'
              id='password'
              type='password'
              placeholder='Your password'
              onChange={(e) => setTransaction(e.target.value)}
            />
          </div>
          <div className='flex w-full mt-8'>
            <button
              className='w-full bg-gray-800 hover:bg-red-900 text-white text-sm py-2 px-4 font-semibold rounded focus:outline-none focus:shadow-outline h-10'
              type='button'
              onClick={handleHallFee}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
