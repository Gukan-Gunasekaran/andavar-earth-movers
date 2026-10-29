import axios from "axios";
import { useLocation, Link } from "react-router-dom";

function Booking() {
  const location = useLocation();
  const title = location.state?.title || "Vehicle";
  const HandleSubmit=async(e)=>{
    e.preventDefault();
    const formData=new FormData(e.target);
    const data=Object.fromEntries(formData.entries());
    try{
      const response=await axios.post("https://localhost:8080/api/order/save",data);
      console.log(response.data);
    }catch(e){
      console.error(e);
    }
  };
  return (
    <>
      <div className=" d-flex justify-content-center align-items-center p-5">
        <div className="card">
          <form className="form">
            <h1 className="card-header bg-primary text-light">book {title}</h1>
            <div className="card-body">
              <div className="d-flex mb-2 ">
                <label htmlFor="name" className="me-2" >
                  Name
                </label>
                <input id="name" type="text" className="form-control " name="c_name" />
              </div>
              <div className="d-flex gap-2 mb-2">
                <label htmlFor="gender" >Gender</label>
                <label htmlFor="male">
                  Male
                </label>
                
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value={"M"}
                />
                <label htmlFor="female">
                  Female
                </label>

                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value={"F"}
                />
              </div>
              <div className="d-flex mb-2 ">
                <label htmlFor="phno" className="me-2">
                  Phone
                </label>
                <input type="number" id="phno" className="form-control mb-2" name="phone"/>
                <label htmlFor="street" className="me-2" >
                  street
                </label>
                <input
                  type="text"
                  id="street"
                  className="form-control mb-2 form-control"
                  name="street"
                />
              </div>
              <div className="d-flex mb-2 ">
                <label htmlFor="city" className="me-2">
                  city
                </label>
                <input type="text" id="city" name="city"className="form-control mb-2" />
                <label htmlFor="taluk" className="me-2">
                  taluk
                </label>
                <input
                  type="text"
                  id="taluk"
                  className="form-control mb-2 form-control"
                  name="taluk"
                />
              </div>

              <div className="d-flex">
                
              </div>
              <div className="d-flex">
                <label htmlFor="district" className="me-2">
                  district
                </label>
                <input
                  type="text"
                  id="district"
                  className="form-control mb-2 form-control"
                  name="district"
                />
              </div>

              <div>
                <button className="btn btn-success me-2" type="submit" onClick={HandleSubmit}>
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
