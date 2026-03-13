import React from 'react'
import Section1 from './components/section1/Section1'
import Section2 from './components/section2/Section2'

const App = () => {

  const users = [
    {
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
      intro: "",
      tag: "Satisfied",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661665318707-d681aa75e137?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI4fHx8ZW58MHx8fHx8",
      intro: "",
      tag: "Underserved",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661589932346-20fb0a8c13e4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
      intro: "",
      tag: "Underbranked",
    },
  ]
  return (
   <div>
    <Section1 users={users}/>
    <Section2/>
   </div>
  )
}

export default App