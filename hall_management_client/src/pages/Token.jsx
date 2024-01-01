import { useEffect, useState } from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import hall from '../assets/images/hall (8).jpg';
import useAuth from '../hooks/useAuth';
import useAxios from '../hooks/useAxios';

const Token = () => {
  const axios = useAxios();
  const { user } = useAuth();
  const startDate = new Date(
    'Fri Nov 25 2023 00:00:00 GMT+0600 (Bangladesh Standard Time)'
  );
  const [date, setDate] = useState({});
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection',
    },
  ]);
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
  console.log('date user value', user);

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 '>
      <div className='flex-1 h-[90.6vh]'>
        {/* <img src={hall} className='h-full object-cover w-full' /> */}
        <img src={"https://i.ibb.co/gwbb19h/IMG20231208114152.jpg"} className='h-full object-cover w-full' />
      </div>
      <div className='flex-1 flex items-center justify-center flex-col gap-5'>
        <div>
          <h1>Token Started : {date?.start}</h1>
          <h1>Name: {user?.displayName}</h1>
          <h1>Token End : {date?.end}</h1>
        </div>
        <div className='mx-auto'>
          <DateRange
            editableDateInputs={false}
            onChange={(item) => setState([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={state}
          />
        </div>
      </div>
    </div>
  );
};

export default Token;
