import { Link } from "react-router-dom";
import jcb from "./assets/jcb.jpg";
import mf from "./assets/mf.jpg";
import developer from "./assets/developer.jpg";

function Body() {
  return (
    <div>
      <div className="d-flex mt-4 justify-content-center align-items-top">
        <span className="ps-3 bg-dark m-2 rounded border-secondary">
          <h1 className="text-primary">
            Hello everyone i'm naveen Gnanasekaran <br />
            ,we are offering Tractor and Loader Services <br />
            for Farming,Cultivation and fertilization,
            <br />
            Building Destruction works.
          </h1>
        </span>
        <span>
          <img src={developer} height="300" width="275" alt="" className="rounded " />
        </span>
      </div>

      <div className=" d-flex justify-content-center align-items-center m-3">
        <div className="card me-2" style={{ height: "500px", width: "400px" }}>
          <center>
            <div className="card-body">
              <h1 className="card-title"> Tractor</h1>
              <img src={mf} className="card-img-top" alt="tractor" />
              <br />
               <ul className="text-bold text-primary mb-1">
                <li>Cultivation</li>
                <li>Fertilizing</li>
                <li>Loading</li>
              </ul>
              <Link className="btn btn-primary mt-auto" to="TractorForm">
                prebook
              </Link>
            </div>
          </center>
        </div>

        <div className="card" style={{ height: "500px", width: "400px" }}>
          <center>
            <div className="card-body">
              <h1> Loader </h1>

              <br />
              <img src={jcb} className="card-img-top mb-3 me-2" alt="jcb" />
              <br />
              <ul className="text-bold text-primary mb-2 mt-5">
                <li>Construction</li>
                <li>Destruction</li>
                <li>Pillars</li>
              </ul>
              <Link className="btn btn-primary mt-auto" to="LoaderForm">
                prebook
              </Link>
            </div>
          </center>
        </div>
      </div>
    </div>
  );
}
export default Body;
