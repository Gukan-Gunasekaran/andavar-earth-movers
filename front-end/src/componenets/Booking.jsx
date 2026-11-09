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
      <div className="container-fluid py-4 mb-5 ">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-8 col-lg-5">
            <div className="card shadow">
              <form className="form" onSubmit={HandleSubmit}>
                <h1 className="card-header bg-dark text-light fs-4">{title}</h1>

                <div className="card-body">
                  <div className="row g-3">
                    {/* Name */}
                    <div className="col-12">
                      <label htmlFor="name" className="form-label">
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        className="form-control form-control-sm text-capitalize"
                        name="custName"
                        required
                      />
                    </div>

                    {/* Phone */}
                    <div className="col-12 col-md-6">
                      <label htmlFor="phno" className="form-label">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phno"
                        maxLength={10}
                        pattern="[0-9]{10}"
                        className="form-control form-control-sm"
                        name="phone"
                        required
                      />
                    </div>

                    {/* Street */}
                    <div className="col-12 col-md-6">
                      <label htmlFor="street" className="form-label">
                        Street
                      </label>
                      <input
                        type="text"
                        id="street"
                        className="form-control text-capitalize form-control-sm"
                        name="street"
                        required
                      />
                    </div>

                    {/* City */}
                    <div className="col-12 col-md-6">
                      <label htmlFor="city" className="form-label">
                        City
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        className="form-control text-capitalize form-control-sm"
                        required
                      />
                    </div>

                    {/* Taluk */}
                    <div className="col-12 col-md-6">
                      <label htmlFor="taluk" className="form-label">
                        Taluk
                      </label>
                      <input
                        type="text"
                        id="taluk"
                        className="form-control text-capitalize form-control-sm"
                        name="taluk"
                        required
                      />
                    </div>

                    {/* District */}
                    <div className="col-12">
                      <label htmlFor="dist" className="form-label">
                        District
                      </label>
                      <select
                        name="district"
                        id="dist"
                        className="form-select form-select-sm"
                        required               
                      >
                        <option value="">Select District</option>
                        <option value="Ariyalur">Ariyalur</option>
                        <option value="Trichy">Trichy</option>
                        <option value="Thanjavur">Thanjavur</option>
                      </select>
                    </div>

                    {/* Buttons */}
                    <div className="col-12 d-flex flex-wrap gap-2">
                      <button
                        className="btn btn-success flex-grow-1"
                        type="submit"
                      >
                        Submit
                      </button>

                      <button
                        className="btn btn-danger flex-grow-1"
                        type="reset"
                      >
                        Clear
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Booking;
