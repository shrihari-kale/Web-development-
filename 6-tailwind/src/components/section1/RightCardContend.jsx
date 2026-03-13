import React from 'react'

const RightCardContend = (props) => {
  return (
    <div>
        <div className="absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between">
        <h2 className="bg-white rounded-full h-14 w-14 flex justify-center items-center text-2xl font-semibold">{props.id+1}</h2>
        <div>
          <p className="text-xl leading-normal text-white mb-10">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus
            deserunt nihil qui esse, non incidunt, voluptatem voluptatibus ad.
          </p>
          <div className='flex justify-between'>
            <button className="bg-blue-600 text-white font-medium rounded-full text-lg px-8 py-2">
              {props.tag}
            </button>
            <button className="bg-blue-600 text-white font-medium rounded-full text-lg px-4 py-2">
              <i className="ri-arrow-right-line"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightCardContend