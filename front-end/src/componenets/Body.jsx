import { Link } from "react-router-dom";
import jcb from "../assets/jcb.jpg";
import mf from "../assets/mf.jpg";
import naveen from "../assets/naveen.jpeg";
import bolero from "../assets/Bolero.jpg";
import ertiga from "../assets/Ertiga.jpg";

function Body() {
  const Imgs = [
    {
      title: "MASSEY FERGUSSON",
      img: mf,
      works: ["cultivation", "fertilization", "transportation"],
    },
    {
      title: "JCB",
      img: jcb,
      works: ["tappering", "Pilliar pits", "Destruction works"],
    },
    {
      title: "BOLERO",
      img: bolero,
      works: ["Airport", "Travelling", "Vacation", "Temple Visit"],
    },
    {
      title: "ERTIGA",
      img: ertiga,
      works: ["Airport", "Travelling", "Vacation", "Temple Visit"],
    },
  ];

  return (
    <div className="bg-dark">
      <div className="d-flex flex-column  flex-md-row pt-4 justify-content-start align-items-center gap-4 mb-4">
        <img
          src={naveen}
          alt="founder"
          className="img-fluid rounded card-hover mx-3"
          style={{ maxWidth: "200px", height: "auto" }}
        />
        <div className="px-3 card-dark rounded card-hover mt-auto">
          <p className="fs-4 text-light">
            Hello everyone i'm <span className="text-warning"> Naveen Gnanasekaran</span> <br />
            ,we are seriving Transportation , Travelling Services
            for Agro,Construction and vacation uses with cost effectiveness  eventually qualitywise no compromise.
            Building Destruction works.
          </p>
        </div>
      </div>

      <div>
        <div className="row justify-content-start g-4 mb-5 mx-3">
          {Imgs.map((image) => (
            <div
              className="col-12 col-sm-6 col-md-6 col-lg-4"
              key={image.title}
            >
              <div className="card card-hover h-100">
                <div className="card-body text-center d-flex flex-column">
                  <h1 className="card-title">{image.title}</h1>

                  <img
                    src={image.img}
                    className="card-img-top"
                    alt={image.title}
                  />

                  <ul className="text-bold text-primary mb-1 mt-auto">
                    {image.works.map((work) => (
                      <li
                        className="nav-link text-dark text-decoration-none"
                        key={work}
                      >
                        {work}
                      </li>
                    ))}
                  </ul>

                  <Link
                    className="btn btn-warning mt-auto"
                    to="booking"
                    state={{ title: image.title }}
                  >
                    book
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <hr className="text-secondary text-center" />
      </div>
    </div>
  );
}
export default Body;
