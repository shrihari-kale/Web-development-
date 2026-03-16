import React, { useState } from 'react'

const App = () => {

  // const [num, setnum] = useState(10)  // read only and setNum write only
  
  // function changeNum(){
  //   setnum(30)
  // }


  const [num, setnum] = useState(0)
  
  function increaseNum(){
    setnum (num+1)
  }
  function decreaseNum(){
    setnum(num-1)
  }
  function increaseNum5() {
    setnum(num+5);
  }
  return (
    <div>
      {/* <h1>Value of a is {num}</h1>
      <button onClick={changeNum}>Click</button> */}
      <h1>{num}</h1>
      <button onClick={decreaseNum}>Decrease</button> 
      <button onClick={increaseNum}>Increase</button>
      <button onClick={increaseNum5}>Increse by 5</button>
    </div>
  );
}

export default App