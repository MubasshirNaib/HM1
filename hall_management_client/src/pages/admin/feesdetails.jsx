import React, { useEffect, useState } from 'react';
import {  Table } from 'reactstrap';
import useAxios from '../../hooks/useAxios.jsx';
const feesdetails = () => {
  const axios = useAxios();
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3000/feesdetails')
        .then(res => {
            setData(res.data)
        })
        .catch(err => console.log(err));
       },[])
       const Filter = (event) =>{
        setData(data.filter(f => f.id.toLowerCase().includes(event.target.value.toLowerCase())))
      }
      const handleDelete = (id) => {
        if(window.confirm(`Do you want to delete ?`)){
            axios.delete('http://localhost:3000/feesdetails/'+ id)
      .then(res => {console.log(res)
       window.location.reload()})
      .catch(errr => console.log(errr))
      alert('Done');
        }else{

        }
      }
  return (
    <div>
    <div className='relative pl-[72%]'>
      <div className='absolute right-0 inset-y-0 rtl:inset-r-0 right-[26%]  flex items-center ps-3 pointer-events-none'>
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
        className='block p-2 m ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        placeholder='Search for users'
        onChange={Filter}
      />
    </div>
  <Table hover>
    <thead>
        <tr>
            <th>No</th>
            <th>
              Name
            </th>
            <th>
              Email
            </th>
            <th>
              Id
            </th>
            <th>
              From
            </th>
            <th>
              To
            </th>
            <th>
              Comments
            </th>
            <th>
              Action
            </th>
        </tr>
    </thead>
    <tbody>
    {data.map((Item, index) => (
                        <tr>
                            <th>
                                {index+1}
                            </th>
                            
                            <td>
                                {Item.name}       
                            </td>
                            <td>
                                {Item.email}
                            </td>
                            <td>
                            {Item.id}
                            </td>
                            <td>
                            {Item.month1}
                            </td >
                            <td>
                            {Item.month2}
                            </td >
                            <td>
                            {Item.comment}
                            </td >
                            <td>
                             <div className='ml-11'></div>
                             <button
                                className='w-full bg-gray-800 hover:bg-red-900 text-white text-sm py-2 px-5 font-semibold rounded focus:outline-none focus:shadow-outline h-10'
                                 type='button' onClick={() => handleDelete(Item._id)} >
                                 Clear
                             </button> 
                            </td>
                        </tr>
                    ))}
    </tbody>
  </Table>

</div>
  )
}

export default feesdetails