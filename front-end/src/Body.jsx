import { Link } from "react-router-dom";
import jcb from "./assets/jcb.jpg";
import mf from "./assets/mf.jpg";
import naveen from "./assets/naveen.jpeg";
import bolero from "./assets/Bolero.jpg";
import ertiga from "./assets/Ertiga.jpg";

function Body() {
  return (
    <div>
      <div className="d-flex flex-column  flex-md-row mt-4 justify-content-center align-items-center gap-4">
        <span className="ps-3 card rounded">
          <h1 className="">
            Hello everyone i'm naveen Gnanasekaran <br />
            ,we are offering Tractor and Loader Services <br />
            for Farming,Cultivation and fertilization,
            <br />
            Building Destruction works.
          </h1>
        </span>
        <span>
          <img
            src={naveen}
            alt="founder"
            className="img-fluid rounded "
            style={{ maxWidth: "280px" }}
          />
        </span>
      </div>

      <div className="row justify-content-center g-4 m-3">
        <div className="col-12 col-md-6 col-lg-5">
          <div className="card card-hover">
            <div className="card-body text-center">
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
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-5">
          <div className="card card-hover">
            <div className="card-body text-center">
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
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-5">
          <div className="card card-hover">
            <div className="card-body text-center">
              <h1 className="card-title"> Bolero</h1>
              <img src={bolero} className="card-img-top" alt="tractor" />
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
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-5">
          <div className="card card-hover">
            <div className="card-body text-center">
              <h1 className="card-title"> Ertiga</h1>
              <img src={ertiga} className="card-img-top" alt="tractor" />
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
          </div>
        </div>
      </div>
    </div>
  );
}
export default Body;
