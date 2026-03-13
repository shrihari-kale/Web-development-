import React from 'react'

const LeftContent = () => {
  return (
    <div className="h-full w-1/3 flex flex-col justify-between">
      <div className='p-5'>
        <h3 className="mb-7 text-5xl font-bold leading-[1.1]" >Prospective<br/><span>Customer</span><br/>Segmentation </h3>
        <p className='font-medium text-gray-600'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam quia
          earum impedit expedita eligendi, nesciunt possimus dolorem! Aspernatur
          velit placeat, quidem obcaecati repellat iure alias vitae, veniam
          earum sed fugit.
        </p>
      </div>
      <div className="text-9xl">
        <i className="ri-arrow-right-up-line"></i>
      </div>
    </div>
  );
}

export default LeftContent