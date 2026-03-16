import React from 'react'

const App = () => {

  function btnClicked(){
    console.log('button is clicked');
  }

  function inputChanging(elem){
   console.log(elem.target.value);
  }


  return (
    <div>
      <button onClick={btnClicked}>first tareeka</button>

      <button
        onDoubleClick={() => {
          console.log("second Tarika");
        }}
      >
        second tareeka
      </button>

      <input onChange={inputChanging} type="text" placeholder="Enter Name" />

      <div
        onMouseMove={(elem) => {
          // jo elem he information deta he event ki
          console.log(elem.clientX);
          console.log("mouse move on");
        }}
        className="box"
      ></div>


      <div onWheel={()=>{
         console.log('srcoll on');
      }}>
        <div className="page1"></div>
        <div className="page2"></div>
        <div className="page3"></div>
      </div>

    </div>
  );
}

export default App