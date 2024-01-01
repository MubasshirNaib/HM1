import React from "react";
const Accordion = () => {
  return (
    <div className='my-10 space-y-5'>
      <h1 className='text-3xl text-center font-bold'>Q&A</h1>
      <div className='join join-vertical w-full'>
        <div className='collapse collapse-arrow join-item border border-base-300'>
          <input type='radio' name='my-accordion-4' checked='checked' />
          <div className='collapse-title text-xl font-medium'>
           <div> How do I place an order on your website?</div>
          </div>
          <div className='collapse-content'>
            <p>
              {' '}
              Placing an order is easy! Just follow these simple steps: <br />
              Just goto food details and place
            </p>
          </div>
        </div>
        <div className='collapse collapse-arrow join-item border border-base-300'>
          <input type='radio' name='my-accordion-4' />
          <div className='collapse-title text-xl font-medium'>
            Do you offer discounts or promotions for regular customers?
          </div>
          <div className='collapse-content'>
            <p>Currently this service is unavailable</p>
          </div>
        </div>
        <div className='collapse collapse-arrow join-item border border-base-300'>
          <input type='radio' name='my-accordion-4' />
          <div className='collapse-title text-xl font-medium'>
            What is your policy on order cancellations?
          </div>
          <div className='collapse-content'>
            <p>User's can cancel their orders</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
