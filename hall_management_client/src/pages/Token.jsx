import React, { useEffect, useState } from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import useAuth from '../hooks/useAuth';
import useAxios from '../hooks/useAxios';
import '../hooks/useAuth.jsx';

const Token = () => {
  const axios = useAxios();
  const { user } = useAuth();
  const [selectedPackage, setSelectedPackage] = useState(''); // State to track the selected package
  const [amount, setAmount] = useState(''); // State to track the amount
  const [transaction, setTransaction] = useState('');
  const [hallfee, setHallfee] = useState(null);

  const [date, setDate] = useState({});

  const handlePackageChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedPackage(selectedValue);

    // Set the amount based on the selected package
    if (selectedValue === '15 days') {
      setAmount("1300 tk");
    } else if (selectedValue === '30 days') {
      setAmount("2500 tk");
    }
  };
  const muba={
    name: user?.displayName,
    email: user?.email,
    ID: hallfee?.ID,
    selectedPackage,
    amount,
    transaction,
  }
  const handletoken  = async (e) =>{
    e.preventDefault();
    console.log("Mubasshir",muba)
    // const id = toast.loading('please wait...');
    e.preventDefault();
    try {
      if(amount!="" && transaction!=""){
      axios
        .post('/tokenusers', muba)
        .then((response) => {
          console.log(response.data);
          alert('Submitted Succesfully');
          // toast.success('Submitted', { id: id});
        })
        .catch((error) => {
          console.log(error.message);
        });}else{
          alert('Required field are empty!!');
        }
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    axios
      .get('/token-dates')
      .then((res) => {
        console.log(res.data);
        return setDate(...res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
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
  console.log('date user value', user);

  return (
    // 
    <div className='container pt-6 max-w-lg mx-auto xl:max-w-4xl h-full flex bg-white rounded-lg shadow overflow-hidden'
    >
      <div className='relative hidden xl:block xl:w-1/2 h-full'>
        <img
          className='absolute  w-full object-cover'
          src='https://i.ibb.co/gwbb19h/IMG20231208114152.jpg'
          alt='my zomato'
          style={{ width: '100%', height: '110vh' }}
        />
      </div>
      <div className='w-full xl:w-1/2 p-6 '>
        <h1 className="text-2xl font-bold ml-16">Purchase Tokens</h1>
        <form method='post' action='#' onSubmit={() => false}>
          <div className='mb-4 mt-6'>
          <div className='mb-4 mt-4'>Name:{user?.displayName}</div>
          <div className='mb-4 mt-4' >Email:{user?.email}</div>
          <div className='mb-4 mt-4'>Student Id:{hallfee?.ID}</div>
          <div className='mb-4 mt-4'>Token Started : {date?.start}</div>
          <div className='mb-4 mt-4'>Token End : {date?.end}</div>
      </div>
      <div className='mb-2 mt-2 flex'>
          <div className='mr-6 mt-3'>Package:</div> 
          <div>
              <select
                className='select select-bordered mt-1'
                onChange={handlePackageChange}
              >
                <option disabled selected>
                  Select
                </option>
                <option>15 days</option>
                <option>30 days</option>
              </select>
          </div>
      </div>
      <div className='mb-4 mt-4'>Amount: {amount}</div>
      <div className='mb-4 mt-6'>
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
              required
              value={transaction}
              onChange={(e) => setTransaction(e.target.value)}
            />
      </div>
          <div className='flex w-full mt-8'>
            <button
              className='w-full bg-gray-800 hover:bg-red-900 text-white text-sm py-2 px-4 font-semibold rounded focus:outline-none focus:shadow-outline h-10'
              type='button'
              onClick={handletoken}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Token;
