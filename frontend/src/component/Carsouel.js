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
            src="https://img.freepik.com/free-vector/gradient-labour-day-social-media-post-template_23-2149345853.jpg?w=1380&t=st=1686771092~exp=1686771692~hmac=2e85dc7aff9e53b7dd923699a35da3d536b12554fc9521306932ef82935d3fd7"
            alt="Third slide"
            height="600px"
          />
        </Carousel.Item>
      </Carousel>

      
    </div>
  );
}

export default UncontrolledExample;
