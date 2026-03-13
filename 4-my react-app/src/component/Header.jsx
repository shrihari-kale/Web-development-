function Header({ cartCount }){
    return (
      <div style={{ background: "black", color: "white", padding: "10px" }}>
        <h2>My store</h2>
        <p>Cart Item:{cartCount}</p>
      </div>
    );
}
export default Header;