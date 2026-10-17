import { Link } from "react-router-dom";

function TractorForm() {
  return (
    <>
        <div
          className=" d-flex justify-content-center align-items-center p-5"
        >
          <div className="card">
          <form className="form">
            <h1 className="card-header bg-primary text-light">
              Pre-book Tractor
            </h1>
            <div className="card-body">
              <div className="d-flex mb-2 ">
                <label htmlFor="name" className="me-2">
                  Name:
                </label>
                <input id="name" type="text" className="form-control " />
              </div>
              <div className="d-flex mb-2 ">
                <label htmlFor="phno" className="me-2">
                  Phone:{" "}
                </label>
                <input type="number" id="phno" className="form-control" />
              </div>

              <div className="d-flex">
                <label htmlFor="area" className="me-2">
                  Area:
                </label>
                <input type="text" id="area" className="form-control mb-2 form-control-lg" />
              </div>

              <div>
                <Link className="btn btn-success me-2" type="submit" to="#">
                  submit
                </Link>
                <Link className="btn btn-danger" type="button" to="#">
                  clear
                </Link>
              </div>
            </div>
          </form>
          </div>
        </div>
    </>
  );
}
export default TractorForm;
