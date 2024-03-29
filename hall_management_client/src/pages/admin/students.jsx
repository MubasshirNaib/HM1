import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Students = () => {
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [search, setSearch] = useState('');

  const filterStudents = () => {
    const filtered = students.filter(student =>
      student.ID.includes(search)
    );
    setFilteredStudents(filtered);
  };

  useEffect(() => {
    axios
      .get('http://localhost:3000/users')
      .then((response) => {
        setStudents(response.data);
        setFilteredStudents(response.data); // Initialize filtered students with all students
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    filterStudents();
  }, [search, students]);
  // console.log('students', students);
  return (
    <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
      <div className='flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900'>
        <label htmlFor='table-search' className='sr-only'>
          Search
        </label>
        <div className='relative'>
          <div className='absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none'>
            <svg
              className='w-4 h-4 text-gray-500 dark:text-gray-400'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 20 20'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
              />
            </svg>
          </div>
          <input
            type='text'
            id='table-search-users'
            value={search}
            className='block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='Search for students'
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      {/* Rest of your table code */}
      <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
        <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
          <tr>
            <th scope='col' className='p-4'>
              <div className='flex items-center'>
                <input
                  id='checkbox-all-search'
                  type='checkbox'
                  className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                />
                <label for='checkbox-all-search' className='sr-only'>
                  checkbox
                </label>
              </div>
            </th>
            <th scope='col' className='px-6 py-3'>
              Name
            </th>
            <th scope='col' className='px-6 py-3'>
              Student Id
            </th>
            <th scope='col' className='px-6 py-3'>
              Alloted Room
            </th>
            <th scope='col' className='px-6 py-3'>
              Hall Fee
            </th>
            <th scope='col' className='px-6 py-3'>
              Token
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents?.map((student) => (
            <tr
              key={student._id}
              className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'
            >
              <td className='w-4 p-4'>
                <div className='flex items-center'>
                  <input
                    id='checkbox-table-search-1'
                    type='checkbox'
                    className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                  />
                  <label for='checkbox-table-search-1' className='sr-only'>
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope='row'
                className='flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white'
              >
                <img
                  className='w-10 h-10 rounded-full'
                  src={student.image || 'https://i.ibb.co/MMDb590/bmwad3.jpg'}
                  alt='name'
                />
                <div className='ps-3'>
                  <div className='text-base font-semibold'>{student?.name}</div>
                  <div className='font-normal text-gray-500'>
                    {student?.email}
                  </div>
                </div>
              </th>
              <td className='px-6 py-4'>{student?.ID}</td>
              <td className='px-6 py-4'>
                <div className='flex items-center'>
                  <div className='h-2.5 w-2.5 rounded-full'></div>{' '}
                  {student.room}
                </div>
              </td>
              <td className='px-6 py-4'>
                <div className='flex items-center'>
                  <div className='h-2.5 w-2.5 rounded-full bg-orange-500 me-2'></div>{' '}
                  Pending
                </div>
              </td>
              <td className='px-6 py-4'>
                <div className='flex items-center'>
                  <div className='h-2.5 w-2.5 rounded-full bg-orange-500 me-2'></div>{' '}
                  Pending
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Students;


