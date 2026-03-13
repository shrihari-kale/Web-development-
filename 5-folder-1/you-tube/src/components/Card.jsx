import React from 'react'

const Card = (props) => {
  return (
    <div className="parent">
      <div className="card">
        <img src="https://images.unsplash.com/photo-1772051858255-ce242fadaaa4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0N3x8fGVufDB8fHx8fA%3D%3D" alt="img" />
        <h1>{props.user}</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
        <button>View profile</button>
      </div>
      </div>
  );
}

export default Card