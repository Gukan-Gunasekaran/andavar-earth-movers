import line from "./dashboards/line.jpg";
import { useState } from "react";

function Admin() {

  const [Img,setImg]= useState(line);

  return (
    <div className="d-flex">
      <aside
        className="bg-secondary p-3 "
        style={{ width: "200px", minHeight: "100vh" }}
      >
        <ul className="nav flex-column gap-4">
          <li className="nav-item">
              <button className="nav-button text-light bg-transparent border-0">Home</button>
          </li>

          <li className="nav-item">
            <button  className="nav-button text-white bg-transparent border-0" onClick={()=>setImg(line)}>
              Analysis
            </button>
          </li>

          <li className="nav-item">
            <button  className="nav-button text-white bg-transparent border-0" onClick={()=>setImg(line)}>
              Growth
            </button>
          </li>

           <li className="nav-item">
            <button  className="nav-button text-white bg-transparent border-0" onClick={()=>setImg(line)}>
              Expence
            </button>
          </li>

          <li className="nav-item">
            <button  className="nav-button text-white bg-transparent border-0 " onClick={()=>setImg(line)}>
              Settings
            </button>
          </li>
        </ul>
      </aside>
      <main>
        <div className="m-4">
          <img src={Img} alt="line" className="img-fluid" />
        </div>
      </main>
    </div>
  );
}

export default Admin;