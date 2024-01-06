import React, { useEffect, useState } from 'react';
import {  Table } from 'reactstrap';
import axios from 'axios';
const allotment = () => {
    const [data, setData] = useState([]);
    const[room,setRoom]=useState('');
    useEffect(() => {
        axios.get('http://localhost:3000/roomusers')
        .then(res => {
            setData(res.data)
        })
        .catch(err => console.log(err));
       },[])
       const Filter = (event) =>{
        setData(data.filter(f => f.room.toLowerCase().includes(event.target.value.toLowerCase())))
      }
      const clear =() =>{
        setRoom('');
      }
      const handleDelete = (id,name) => {
        if(window.confirm(`Are you sure want to delete ${name}`)){
            axios.delete('http://localhost:3000/roomusers/'+ id)
      .then(res => {console.log(res)
       window.location.reload()})
      .catch(errr => console.log(errr))
      alert('Done');
        }else{

        }
      }
      
    const handleAllow = (Id1,Id2,Id3,Id4,Members,prevrn) =>{
    console.log("Mubasshir",Id1,Id2,Id3,Id4,Members,prevrn,room);
         
        try {
          if(room==""){
            alert('Room No Is Empty!!!')
          }else{
          axios
            .post('http://localhost:3000/roomdetails',{Id1,Id2,Id3,Id4,Members,prevrn,room})
            .then((response) => {
              console.log(response.data);
              alert('Data Saved !!');
              clear()
            })
            .catch((error) => {
              console.log(error.message);
            });}
        } catch (e) {
          console.log(e);
        }
      };
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
                 Applicant
                </th>
                <th>
                  Email
                </th>
                <th>
                  Student Id
                </th>
                <th>Room Members</th>
                <th>
                  Current Room No
                </th>
                <th>
                  Interested Room No
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
                                    <p>1. {Item.id1}</p>
                                    <p>2. {Item.id2}</p>
                                    <p>3. {Item.id3}</p>
                                    <p>4. {Item.id4}</p>
                                    
                                </td>
                                <td>
                                    {Item.roommembers}
                                </td>
                                <td>
                                {Item.prevrn}
                                </td>
                                <td>
                                <p>1. {Item.room1}</p>
                                    <p>2. {Item.room2}</p>
                                    <p>3. {Item.room3}</p>
                                </td>
                                <td >
                                <div class="relative z-0 w-full mb-5 group">
                                  <input type="text" name="room" id="room" value={room}
                                      onChange={(e) => setRoom(e.target.value)} class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                     <label for="room" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Allocated Room:</label>
                                 </div>
                                <div className='flex'>
                                <button
                                    className='w-full bg-gray-800 hover:bg-green-900 text-white text-sm py-2 px-4 font-semibold rounded focus:outline-none focus:shadow-outline h-10'
                                     type='button'
                                     onClick={() => handleAllow(Item.id1,Item.id2,Item.id3,Item.id4,Item.roommembers,Item.prevrn)}>
                                     Approve
                                 </button>
                                 <div className='ml-11'></div>
                                 <button
                                    className='w-full bg-gray-800 hover:bg-red-900 text-white text-sm py-2 px-5 font-semibold rounded focus:outline-none focus:shadow-outline h-10'
                                    onClick={() => handleDelete(Item._id,Item.name)} type='button'>
                                     Clear
                                 </button>  </div>
                                </td>
                            </tr>
                        ))}
        </tbody>
      </Table>

    </div>
  )
}

export default allotment