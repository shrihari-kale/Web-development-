import React from 'react'

const App = () => {

  function btnClick(){
    console.log("button is clicked");
  }

  function inputChanging(value){
    console.log(value);
  }

  return (
    <div>
      <h1>Hello, shrihari</h1>
      {/* <button onClick={btnClick}>Change user</button> */}  
       <button onClick={() =>{console.log("button click")}}>Click here</button>

       <input onChange={function(elem){inputChanging(elem.target.value)}}
       type='text' placeholder='Enter Name'/>

       <div className='box'
       onMouseMove={(elem) => {
        console.log(elem.clientY);
       }}> 
       </div>
    </div>
  )
}

export default App