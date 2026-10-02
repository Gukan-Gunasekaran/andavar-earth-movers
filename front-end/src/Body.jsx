import { Link } from "react-router-dom";
import jcb from "./assets/jcb.jpg";
import mf from "./assets/mf.jpg";
import Admin from "./Admin";

function Body() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 m-2">
      <div className="card me-2" style={{ height: "250px", width: "200px" }}>
        <div className="card-body">
          <center>
            <h1 className="card-title"> Tractor</h1>
            <img src={mf} className="card-img-top" alt="tractor" />
            <br />
            <Link className="btn btn-primary mt-auto" to="#">
              prebook
            </Link>
          </center>
        </div>
      </div>

      <div className="card" style={{ height: "250px", width: "200px" }}>
        <div className="card-body">
          <center>
            <h1 className="card-title"> Loader </h1>
            <br />
            <img src={jcb} className="card-img-top mb-3" alt="jcb"/>
            <br />
            <Link className="btn btn-primary mt-auto" to="#">
              prebook
            </Link>
            <Link className="btn btn-secondary" to="Admin" > Admin Board </Link>
          </center>
        </div>
      </div>
    </div>
  );
}
export default Body;
