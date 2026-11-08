import axios from "axios";
import { useLocation, Link } from "react-router-dom";

function Booking() {
  const location = useLocation();
  const title = location.state?.title || "Vehicle";
  const HandleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    for (const [key, value] of formData.entries()) {
      if (typeof value === "string" && value.length > 0) {
        formData.set(key, value.charAt(0).toUpperCase() + value.slice(1));
      }
    }
    const data = Object.fromEntries(formData.entries());
    data.vehicle = title;
    try {
      const response = await axios.post(
        "https://andavar-earth-movers.onrender.com/order/save",
        data,
      );
      console.log(response.data);
      alert("booked sucessfully");
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <>
      <div className=" d-flex justify-content-center align-items-center p-5">
        <div className="card">
          <form className="form" onSubmit={HandleSubmit}>
            <h1 className="card-header bg-dark text-light">{title}</h1>
            <div className="card-body">
              <div className="d-flex flex-column mb-2 ">
                <label htmlFor="name" className="me-2">
                  Name
                </label>

                <input
                  id="name"
                  type="text"
                  className="form-control column text-capitalize"
                  name="custName"
                />
              </div>

              <div className="d-flex mb-2 ">
                <label htmlFor="phno" className="me-2">
                  Phone
                </label>
                <input
                  type="number"
                  id="phno"
                  maxLength={10}
                  className="form-control mb-2"
                  name="phone"
                />

                <label htmlFor="street" className="me-2">
                  street
                </label>
                <input
                  type="text"
                  id="street"
                  className="form-control mb-2 form-control text-capitalize"
                  name="street"
                />
              </div>

              <div className="d-flex mb-2 ">
                <label htmlFor="city" className="me-2">
                  city
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  className="form-control mb-2 text-capitalize"
                />
                <label htmlFor="taluk" className="me-2">
                  taluk
                </label>
                <input
                  type="text"
                  id="taluk"
                  className="form-control mb-2 form-control text-capitalize"
                  name="taluk"
                />
              </div>

              <div className="d-flex"></div>
              <div className="d-flex">
                <label htmlFor="district" className="me-2">
                  district
                </label>

                <select
                  name="district"
                  id="dist"
                  className="form-select form-select w-50 border-none mb-4"
                >
                  <option value="Ariyalur">Trichy</option>
                  <option value="Trichy">Ariyalur</option>
                  <option value="Thanjavur">Thanjavur</option>
                </select>
              </div>

              <div>
                <button className="btn btn-success me-2" type="submit">
                  submit
                </button>
                <button className="btn btn-danger" type="reset" to="#">
                  clear
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default Booking;
