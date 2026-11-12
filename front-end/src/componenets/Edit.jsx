import axios from "axios";
function Edit({ order }) {
  const orderId = order.orderId;
  const baseUrl="https://andavar-earth-movers.onrender.com"
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    await axios
      .patch(`${baseUrl}/order/edit/${orderId}`, data)
      .then(() => {
        console.log(data);
        alert("Edited sucessfully");
      })
      .catch((e) => console.error(e));
  };

  return (
    <>
      <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center mt-5 max-vh-100 ">
        <form className="col-md-6 col-lg-5" onSubmit={handleSubmit}>
          <div className="card shadow">
            <center><h1 className="card-header bg-warning"> EDIT</h1></center>
            <div className="card-body bg-dark text-light">
              <div className="d-flex flex-column flex-sm-row mb-2 gap-2">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control "
                  id="name"
                  name="custName"
                  placeholder={order.custName}
                />
              </div>
              <div className="d-flex flex-column flex-sm-row mb-2 gap-2 " >
                <label htmlFor="phone">Phone</label>
                <input
                  className="form-control"
                  type="number"
                  name="phone"
                  id="phone"
                  maxLength={10}
                  placeholder={order.phone}
                />
                <label htmlFor="taluk">Taluk</label>
                <input
                  className="form-control"
                  name="taluk"
                  type="text"
                  placeholder={order.taluk}
                  id="taluk"
                />
              </div>

              <div className="d-flex flex-column flex-sm-row mb-2 gap-2">
                <label htmlFor="street">Street</label>
                <input
                  className="form-control"
                  type="text"
                  name="street"
                  id="street"
                  placeholder={order.street}
                />
                <label htmlFor="city">City</label>
                <input
                  className="form-control"
                  type="text"
                  name="city"
                  placeholder={order.city}
                  id="city"
                />
              </div>
              <div className="d-flex flex-column flex-sm-row mb-2">
                <label htmlFor="vehicle">Vehicle</label>
                <select name="vehicle" id="vehicle" className="form-select">
                  <option hidden>{order.vehicle}</option>
                  <option value="MASSAY FERGUSSON">MASSAY FERGUSSON</option>
                  <option value="JCB">JCB</option>
                  <option value="BOLERO">BOLERO</option>
                  <option value="ERTIGA">ERTIGA</option>
                </select>

                <label htmlFor="district">District</label>

                <select
                  id=""
                  className="form-select"
                  name="district"
                  placeholder={order.district}
                >
                  <option value={order.district} hidden>
                    {order.district}
                  </option>
                  <option value="Ariyalur">Ariyalur </option>
                  <option value="Trichy">Trichy</option>
                  <option value="Thanjavur">Thanjavur</option>
                </select>
              
              </div>
             
              <div className="d-flex mt-auto justify-content-end mt-auto">
                <button type="clear" className="btn btn-dark rounded">
                  cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-dark rounded"
                >
                  save
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
export default Edit;
