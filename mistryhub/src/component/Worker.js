import "./style.css";
import Navbar from "./Navbar";
import Form from "./Form";
function worker() {
  return (

    <div>
      <Navbar/>
      <div style={{ width: "100%" }}>
        <img
          src="https://img.freepik.com/free-vector/set-modern-workers-repairing-house_1262-19340.jpg?w=1480&t=st=1665426300~exp=1665426900~hmac=63a01f09da557f9836adc551aa512f3fc5a0690b2b20ddc99bc0b61ef65f6d4a"
          alt="bannerWorker"
          width="100%"
        />
      </div>
      <h1 style={{ textAlign: "center", color: "red" }}>Work with us</h1>
      <div style={{ margin: "10px" }}>
        <div className="d-flex mx-auto" style={{ backgroundColor: "#ffffff",marginBottom:"5%" }}>
          <div className="mx-auto" style={{ width: "45%", height: "700px" }}>
            <img
              src="https://img.freepik.com/free-vector/construction-worker-concept-illustration_114360-8916.jpg?w=826&t=st=1665426471~exp=1665427071~hmac=b7b587e762de0fe699e06e9b562d651b5d73ee6984cae857b40cc133b313b071"
              alt="worker_image"
              height="100%"
              width="100%"
              style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                width: "75%",
              }}
            />
          </div>
          <div style={{ width: "55%" }}>
            <p
              style={{ textAlign: "justify", fontSize: "2em", padding: "20px" }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Sed.Lorem ipsum
            </p>
          </div>
        </div>
      </div>
      <h1 style={{textAlign:"center",color:"rgba(40, 18, 210, 0.6)",fontSize:"3rem",fontFamily:"calibiri"}}><strong>Register with us and we will publish your details!</strong></h1>
    <Form/>
    </div>
  );
}
export default worker;
