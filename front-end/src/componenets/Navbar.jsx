import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="sticky-top">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid bg-warning">
          <Link className="navbar-brand text-dark" to="#">
            A
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="#">
                  
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  
                </Link>
              </li>

              <li className="nav-item dropdown" hidden>
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                   dropdown
                  
                </Link>
                <ul className="dropdown-menu">
                 
                  <li>
                    <Link className="dropdown-item" to="#">
                      item
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                       something
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider"/> 
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#" hidden>
                       something
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link disabled" aria-disabled="true">
                 
                </Link>
              </li>
            </ul>
            <Link className="btn nav-link" to="dashboard">
              <i className="bi bi-person-circle fs-4 me-2"></i>
            </Link>

            <form className="d-flex" role="search" >
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                hidden
              />
              <button className="btn btn-outline-success" type="submit" hidden>
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
