function Card(props) {
  return (
    <div className="CardDiv">
      <img src={props.item} className="CardImg"></img>
      <div className="CardDetails">
        <h4>{props.title}</h4>
        <img src="./images/Star.png" />
        <p>₹{props.price}</p>
        <p className="free">FREE delivery</p>
      </div>
    </div>
  );
}

export default Card;
