import React, { useState } from 'react';
import '../hooks/useAuth.jsx'
// import 'mdb-react-ui-kit/dist/css/mdb.min.css';
//import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBRow,
  MDBCol,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
// import Container from '../components/ui/Container';
import useAuth from '../hooks/useAuth.jsx';
  // import '../styles/form.css';
 
const Form = () => {
   const { user } = useAuth;
   const[month1, setMonth1]= useState('')
   const[month2,setMonth2]=useState('')
   const[transaction,setTransaction]=useState('')
   const muba={
    name:user?.displayName,
    email:user?.email,
    
    month1,
    month2,
    transaction
  }
  const handleHallFee =()=>{
    console.log("hall fee",muba)

  }

  return (
  //   <MDBContainer fluid className='my-5'>

  //     <MDBRow className='g-0 align-items-center'>
  //       <MDBCol col='6'>

  //         <MDBCard className='my-5 cascading-right' style={{background: 'hsla(0, 0%, 100%, 0.55)',  backdropFilter: 'blur(30px)'}}>
  //           <MDBCardBody className='p-5 shadow-5 text-center'>

  //             <h2 className="fw-bold mb-5">Hall Fee</h2>

  //             <MDBRow>
  //               <MDBCol col='6'>
  //                 {/* <MDBInput wrapperClass='mb-4' label='Name' id='form2' type='text'/> */}
  //                 <h5 class="flex items-center justify-start">Name:{user?.displayName || "Naib"}</h5>
  //               </MDBCol>

  //               <MDBCol col='6'>
  //                 {/* <MDBInput wrapperClass='mb-4' label='Student Id' id='form2' type='text'/> */}
  //                 <h5>Student Id: {"1904089"}</h5>
  //               </MDBCol>
  //             </MDBRow>
  //             <h5 class="flex items-center mt-4">Email: {"u1904089@student.cuet.ac.bd"}</h5>
  //             {/* <MDBInput wrapperClass='mb-4' label='' id='form3' type='email'/> */}
  //            <div class="flex items-center justify-start">
  //               <p class="text-xl mt-4">Select Month:</p>
  //            </div>
  //             <MDBRow>
  //               <MDBCol col='6'>
  //               <select className="select select-bordered"onChange={(e) => setMonth1(e.target.value)}>
  //                 <option disabled selected>From</option>
  //                 <option>January</option>
  //                 <option>February</option>
  //                 <option>March</option>
  //                 <option>April</option>
  //                 <option>May</option>
  //                 <option>June</option>
  //                 <option>July</option>
  //                 <option>August</option>
  //                 <option>September</option>
  //                 <option>October</option>
  //                 <option>November</option>
  //                 <option>December</option>
  //               {/* <option disabled selected>Form</option>
  //                 {
  //                   options.map(option =>(
  //                    <option value={option.value}>{option.level}</option> 
  //                   ))
  //                 } */}
  //               </select>
  //               </MDBCol>
  //               <MDBCol col='6'>
  //               <select className="select select-bordered" onChange={(e) => setMonth2(e.target.value)}>
  //                 <option disabled selected>To</option>
  //                 <option>January</option>
  //                 <option>February</option>
  //                 <option>March</option>
  //                 <option>April</option>
  //                 <option>May</option>
  //                 <option>June</option>
  //                 <option>July</option>
  //                 <option>August</option>
  //                 <option>September</option>
  //                 <option>October</option>
  //                 <option>November</option>
  //                 <option>December</option>
  //               </select>
  //               </MDBCol>
  //             </MDBRow>    

  //             <MDBInput wrapperClass='mb-4 mt-4' label='Transaction Id' id='form4' type='password'onChange={(e) => setTransaction(e.target.value)}/>
  //             <MDBBtn className='w-100 mb-4 text-lg' size='lg' type="button" onClick={handleHallFee}>Submit</MDBBtn>

  //           </MDBCardBody>
  //         </MDBCard>
  //       </MDBCol>

  //       <MDBCol col='6'>
  //         <img src="https://i.ibb.co/gwbb19h/IMG20231208114152.jpg" class="w-100 rounded-4 shadow-4"
  //           alt="" fluid/>
  //       </MDBCol>

  //     </MDBRow>

  //   </MDBContainer>
  <div className="container pt-6 max-w-lg mx-auto xl:max-w-3xl h-full  flex bg-white rounded-lg shadow overflow-hidden">
      <div className="relative hidden xl:block xl:w-1/2 h-full">
        <img
          className="absolute  w-full object-cover"
          src="https://i.ibb.co/gwbb19h/IMG20231208114152.jpg"
          alt="my zomato"
          style={{width:'100%', height:'91vh'}}
        />
      </div>
      <div className="w-full xl:w-1/2 p-8 ">
        <h1 className="text-2xl font-bold ml-16">Hall Fee</h1>
        <form method="post" action="#" onSubmit={() => false}>
          
          <div className="mb-4 mt-6">
          Name:{user?.displayName || "Muba"}
          </div>
          <div className="mb-4 mt-4">
          Email:{"u1904089@Student.cuet.ac.bd"}
          </div>
          <div className="mb-4 mt-4">
          Student Id:{"1904089"}  
          </div>
          <div className="mb-4 mt-4">
          Month: 
          </div>
          <div className="mb-6 mt-4 flex ">
             <div >
            <select className="select select-bordered " onChange={(e) => setMonth1(e.target.value)}>
                  <option disabled selected>From</option>
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
              </select></div>
              <div className='pl-6'>
              <select className="select select-bordered " onChange={(e) => setMonth2(e.target.value)}>
                  <option disabled selected>To</option>
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
          <div className="mb-6 mt-6">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="password"
            >
              Transaction Id:
            </label>
            <input
              className="text-sm bg-gray-200 appearance-none rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline h-10"
              id="password"
              type="password"
              placeholder="Your password"
              onChange={(e) => setTransaction(e.target.value)}
            />
            
          </div>
          <div className="flex w-full mt-8">
            <button
              className="w-full bg-gray-800 hover:bg-grey-900 text-white text-sm py-2 px-4 font-semibold rounded focus:outline-none focus:shadow-outline h-10"
              type="button" onClick={handleHallFee}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Form