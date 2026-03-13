import React from 'react'
import Card from './components/Card';
//import "./index.css";

const App = () => {
  return (
    <div className="parent">
      <Card user="Munna" />
      <Card user="Shrihari" />
      <Card user="Yogesh" />
    </div>
  );
}

export default App  