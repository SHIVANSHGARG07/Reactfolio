
function Item(props){
    const Itemname = props.name
    return(
        <div>
       <p className="watching">{Itemname}</p>
       {props.children};
        </div>
    
    );
}

export default Item;