import { Link } from "react-router-dom";
import jcb from "./assets/jcb.jpg";
import mf from "./assets/mf.jpg";
import naveen from "./assets/naveen.jpeg";
import bolero from "./assets/Bolero.jpg";
import ertiga from "./assets/Ertiga.jpg";

function Body() {
  const Imgs = [
    {
      title: "tractor",
      img: mf,
      works: ["cultivation", "fertilization", "transportation"],
    },
    {
      title: "Back-loader",
      img: jcb,
      works: ["tappering", "Pilliar pits", "Destruction works"],
    },
    {
      title: "Bolero",
      img: bolero,
      works: ["Airport", "Travelling", "Vacation", "Temple Visit"],
    },
    {
      title: "Ertiga",
      img: ertiga,
      works: ["Airport", "Travelling", "Vacation", "Temple Visit"],
    },
  ];

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
        {Imgs.map((image, index) => (
          <div className="col-12 col-md-6 col-lg-5">
            <div className="card card-hover">
              <div className="card-body text-center">
                <h1 className="card-title"> {Imgs[index].title}</h1>
                <img
                  key={index}
                  src={image.img}
                  className="card-img-top"
                  alt="tractor"
                />
                <br />
                <ul className="text-bold text-primary mb-1">
                  {Imgs[index].works.map((work, i) => (
                    <li key={i}>{work}</li>
                  ))}
                </ul>
                <Link className="btn btn-primary mt-auto" to="booking" state={{ title: image.title }}>
                  prebook
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Body;
