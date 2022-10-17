function Card(props) {
    return(
        // console.log(props),
        <div className="card">
        <h4><strong>Name </strong>: {props.props.name}</h4>,
        <h4>Experience : {props.props.experience}</h4>,
        <h4>Location : {props.props.location}</h4>,
        <h4>Contact Number : {props.props.contactNumber}</h4>,
        <p style={{fontSize:"25px",fontStyle:"italic"}}>{props.props.about} </p>
        </div> 
    );
}
export default Card;