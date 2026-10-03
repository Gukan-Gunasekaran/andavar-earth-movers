import { Link } from "react-router-dom";

function Admin() {
  return (
    <div className="d-flex">
      <aside
        className="bg-secondary p-3 "
        style={{ width: "200px", minHeight: "100vh" }}
      >
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link to="#" className="nav-link text-white">
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link to="#" className="nav-link text-white">
              Analysis
            </Link>
          </li>

          <li className="nav-item">
            <Link to="#" className="nav-link text-white">
              Growth
            </Link>
          </li>

           <li className="nav-item">
            <Link to="#" className="nav-link text-white">
              Expence
            </Link>
          </li>

          <li className="nav-item">
            <Link to="#" className="nav-link text-white">
              Settings
            </Link>
          </li>
        </ul>
      </aside>

      <main className="p-4 flex-grow-1">
        <h1>Dashboard</h1>
        <canvas id="line" height={400} width={400}>

        </canvas>
      </main>
    </div>
  );
}

export default Admin;