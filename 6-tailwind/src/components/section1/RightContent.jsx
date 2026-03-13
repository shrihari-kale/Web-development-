import React from 'react'
import 'remixicon/fonts/remixicon.css'
import RightCard from './RightCard';

const RightContent = (props) => {
    console.log(props);
  return (
    <div id="right" className="p-6 h-full rounded-4lx w-2/3 flex overflow-x-auto flex-nowrap gap-8">
     {props.users.map(function(elem,idx){

     return <RightCard key={idx} id={idx} img={elem.img} tag={elem.tag}/>
     })}
    </div>
  );
}

export default RightContent