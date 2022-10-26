import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
function UncontrolledExample() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://img.freepik.com/free-vector/construction-banner-with-worker-crane-hook_107791-8699.jpg?w=1380&t=st=1665726372~exp=1665726972~hmac=3751ed0d1b33112180c219e79f59e82dafe3ba9ff525616f8ca398ddcc0bf917"
            alt="First slide"
            height="600px"
          />
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://img.freepik.com/free-vector/cartoon-scene-building-construction-site_1308-105125.jpg?w=1380&t=st=1665746762~exp=1665747362~hmac=7454ab520fb00dd07384437b531276df394f62f472098319d400ad4057b15a64"
            alt="Second slide"
            height="600px"

          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://img.freepik.com/free-vector/illustrated-people-renovating-living-room_23-2148677770.jpg?w=1380&t=st=1665746532~exp=1665747132~hmac=cfa0f2646d914fe01b964c7e63497728167b2ab483f8d0d79ca4d2a1c2d3475a"
            alt="Third slide"
            height="600px"
          />
        </Carousel.Item>
      </Carousel>

      
    </div>
  );
}

export default UncontrolledExample;
