import "./style.css";
import WorkerCard from "./WorkerCard";
function services() {
  return (
    <div class="services" id="services">
      <div
        class="d-flex mx-auto services-class"
        style={{ height: "auto", margin:'2%' }}
      >
        <div class="d-flex scroller mx-auto">
          <WorkerCard
            title="Electrician"
            imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOgNQzPGJTFZjOLFzr7mrNOSILhj2yX6FyR36HL26jMQ&s"
          />
          <WorkerCard
            title="Plumber"
            imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQgMJ-rF9ypmyywDV72V8LniY6-ZFyCjoAm1OSbd9v&s"
          />
          <WorkerCard
            title="Carpenter"
            imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQakLq6kne7mH6-GeDMDkS5fnm3QJDRJiezzbiG13k&s"
          />
          <WorkerCard
            title="Mason"
            imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_mZtoDnJ_WX79D7tjjwg3ZLSJ7HYdu9PWehe1W814&s"
          />
          <WorkerCard
            title="Painter"
            imgSrc="https://img.freepik.com/free-vector/painter-worker_24877-63506.jpg?w=740&t=st=1665746216~exp=1665746816~hmac=77239e733ca6e33a2ec91a96526dcbd5c6a8d290e4b67157465b05f18f03bb1e"
          />
          <WorkerCard
            title="Repairman"
            imgSrc="https://img.freepik.com/free-vector/air-conditioner-repair-repairman-with-tools_33099-272.jpg?w=826&t=st=1665746480~exp=1665747080~hmac=98262f785bbd2bf144a801fcc56037c33c6037eea2fca2ffbb1574a488c4d92f"
          />
        </div>
      </div>
      <div style={{ margin: "25px", marginBottom: "50px", marginTop: "50px" }}>
      </div>
    </div>
  );
}
export default services;
