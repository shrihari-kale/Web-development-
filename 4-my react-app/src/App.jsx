// import React from 'react'
// import Card from './component/Card';
// import Header from './component/Header';
// //import Sidebar from './component/Sidebar';
// import Footer from './component/Footer';
// //import Counter from './component/counter';
// import { useState } from 'react';

// function App() {
//   const [count, setCount]=useState(0);

//   const products=[
//     {id: 1, title: "Laptop", price: 50000},
//     {id: 2, title: "Mobile", price: 20000},
//     {id: 3, title: "Headphone", price: 2000}
//   ];

//   return (
//     <div>
//       <Header cartCount={cart} />

//       <div style={{ display: "flex" }}>
//         {products.map((item) => (
//           <Card
//             kay={item.id}
//             title={item.title}
//             price={item.price}
//             onAdd={() => setCart(cart + 1)}
//           />
//         ))}
//       </div>
//       <Footer />
//     </div>

//     //  <div className="container">
//     //    <Header />
//     //   <div className="main">
//     //<Sidebar />
//     //         <Card />
//     //     </div>
//     //    <Footer />
//     //    </div>
//   );
// }

// export default App //

import { useState } from "react";
import Header from "./component/Header";
import Card from "./component/Card";
import Footer from "./component/Footer";

function App() {
  const [cart, setCart] = useState(0);

  const products = [
    { id: 1, title: "Laptop", price: 50000, image: "/laptop1.svg" },
    { id: 2, title: "Mobile", price: 20000 },
    { id: 3, title: "Headphone", price: 2000 },
    { id: 4, title: "T.V", price: 1200 },
  ];

  return (
    <div>
      <Header cartCount={cart} />

      <div className="main-card">
        {products.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            price={item.price}
            image={item.image}
            onAdd={() => setCart(cart + 1)}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default App;