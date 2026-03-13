function Sidebar(){
    return(
        <div className="sidebar">
        <img src="{props.image} alt={props.name}"/>
        <h3>Sidebar</h3>
        <p>links will be here</p>
        </div>
    );
}
export default Sidebar;