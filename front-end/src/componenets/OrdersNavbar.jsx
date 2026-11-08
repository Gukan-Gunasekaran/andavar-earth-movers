import { Link } from "react-router-dom";
import { useState } from "react";

function OrdersNavbar() {
  const [colum, setColumn] = useState("orderID");

  const handleSelect = (value) => {
    setColumn(value);
    
  };
  return (
    <div className="sticky-top">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand text-warning" to="#">
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
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Link
                </Link>
              </li>

              <li className="nav-item">
                <label htmlFor="oby">{colum}</label>
              </li>
              <li className="nav-item dropdown">
                <button
                  className="nav-link dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                >
                  Sort
                </button>

                <ul className="dropdown-menu" name="oby">
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => handleSelect("orderID")}
                    >
                      order
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => handleSelect("custName")}
                    >
                      name
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => handleSelect("phone")}
                    >
                      phone
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => handleSelect("city")}
                    >
                      city
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => handleSelect("taluk")}
                    >
                      taluk
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => handleSelect("district")}
                    >
                      district
                    </button>
                  </li>
                </ul>
              </li>
            </ul>

            <Link className="btn nav-link" to="Orders">
              <i className="bi bi-person-circle fs-4 me-2"></i>
            </Link>

            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default OrdersNavbar;
