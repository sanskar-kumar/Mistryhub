import axios from "axios";
function Card(props) {
  const handleSubmit = (star) => {
    // event.preventDefault();
    // rating = rating;
    // console.log(props.props.email);
    // console.log(star);
    axios.post("http://localhost:3000/rating", {
      rating: star,
      email: props.props.email
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    // console.log(props),
    <div className="card">
      <div className="worker_details">
        <div className="worker_general_details">
          <h4>
            <strong>Name </strong>: {props.props.name}
          </h4>
          ,<h4>Category : {props.props.category}</h4>,
          <h4>Experience : {props.props.experience}</h4>,
          <h4>Location : {props.props.location}</h4>,
          <h4>Contact Number : {props.props.contactNumber}</h4>,
          {/* <h4>Rating: 5/5</h4> */}
        </div>
        <div className="worker_image">
            <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5HIcfODFMZAUv9voGR1uLyYZsE4E5AmAaDA&usqp=CAU"} alt="worker_image" />
        </div>
      </div>

      <p style={{ fontSize: "25px", fontStyle: "italic" }}>
        {props.props.about}{" "}
      </p>

      {/* <button className="worker_request_services"> Request Service </button> */}
      <div className="rating">
      <button className="star_button"  onClick={() => handleSubmit('oneStar')}> 1⭐ </button>
      <button className="star_button" onClick={() => handleSubmit('twoStar')}> 2⭐ </button>
      <button className="star_button" onClick={() => handleSubmit('threeStar')}> 3⭐ </button>
      <button className="star_button" onClick={() => handleSubmit('fourStar')}> 4⭐ </button>
      <button className="star_button" onClick={() => handleSubmit('fiveStar')}> 5⭐ </button>
      </div>
      
    </div>
  );
}
export default Card;
