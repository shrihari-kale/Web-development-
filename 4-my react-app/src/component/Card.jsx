import "./Card.css";
function Card({ title, price, image,onAdd }) {
  return (
    
      <div className="container">
        <img src={image} alt={title}/>
        <h3>{title}</h3>
        <p>₹ {price}</p>
        <button onClick={onAdd}>Add to Cart</button>
      </div>
    
  );
}

export default Card;
