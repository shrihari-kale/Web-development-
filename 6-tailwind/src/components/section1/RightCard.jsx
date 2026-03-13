import React from 'react'
import RightCardContend from './RightCardContend';

const RightCard = (props) => {
  return (
    <div className="h-full w-80 flex-shrink-0  overflow-hidden relative rounded-4xl">
      <img
        className="h-full w-full object-cover"
        src={props.img}
        alt="img"
      />
      <RightCardContend id={props.id} tag={props.tag}/>
    </div>
  );
}

export default RightCard