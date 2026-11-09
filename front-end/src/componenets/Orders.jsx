import axios from "axios";
import { useEffect, useState } from "react";
import { deleteOrder, getOrders } from "../services/OrderService";
import { Link } from "react-router-dom";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [colum, setColumn] = useState("orderId");
  const [sVal, setSval] = useState("");
  useEffect(() => {
    loadOrders();
  }, [currentPage, colum, sVal]);

  const loadOrders = (page = currentPage, column = colum, value = sVal) => {
    getOrders(page, column, value)
      .then((response) => {
        setOrders(response.data.content ?? response.data);
      })
      .catch((error) => console.error(error));
  };

  const handleNext = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const handlePrev = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const [d_id, setD_id] = useState("");

  const handleDelete = (d_id) => {
    if (!d_id) return;

    deleteOrder(d_id)
      .then(() => {
        setD_id("");
        alert("deleted successfully");
        if (orders.length === 1 && currentPage > 1) {
          setCurrentPage((prev) => prev - 1);
        } else {
          loadOrders();
        }
      })
      .catch((error) => console.error(error));
  };

  const handleSelect = (e) => {
    setColumn(e.target.value);
    setCurrentPage(1);
  };
  return (
    <div className="d-flex flex-column min-vh-100 mb-2">
      <div className="d-flex flex-row flex-wrap justify-content-center gap-2 bg-warning p-2 border-dark">
        <button className="btn btn-sm bi bi-person-circle fs-6 border-0"></button>
        <span>
          <select
            id="colum"
            name="colum"
            className="form-select form-select-sm"
            value={colum}
            onChange={handleSelect}
          >
            <option hidden>Sort</option>
            <option value="custName">name</option>
            <option value="phone">phone</option>
            <option value="city">city</option>
            <option value="taluk">taluk</option>
            <option value="district">district</option>
          </select>
        </span>

        <span>
          <input
            type="text"
            name="sVal"
            className="form-control form-control-sm "
            onChange={(e) => {
              const value = e.target.value;
              setSval(value.charAt(0).toUpperCase() + value.slice(1));
            }}
            style={{ width: "180px", maxWidth: "100%" }}
          />
        </span>

        <i className="bi btn btn-sm bg-dark rounded bi-search text-white border-warning"></i>
      </div>
      <div className="d-flex flex-column flex-md-row flex-grow-1 w-100">
        <aside className="bg-dark text-light flex-shrink-0 sidebar">
          <ul className="d-flex flex-row flex-md-column justify-content-around justify-content-md-start align-items-center align-items-md-start list-unstyled gap-2 gap-md-3 p-2 p-md-3 mb-0">
            {" "}
            <li>
              <button className="nav-link fs-6 py-2">Menu</button>
            </li>
            <li>
              <Link to="/dashboard" className="nav-link py-2 fs-6">
                Dashboard
              </Link>
            </li>
            <li>
              <button className="nav-link fs-6 py-2">Modify</button>
            </li>
          </ul>
        </aside>
        <main className="flex-grow-1 min-w-0">
          <div className="container-fluid px-0 px-md-3 py-2 py-md-4">
            <div className="table-responsive w-100 table-bordered ">
              <table className="table align-middle table-hover table-bordered">
                <thead className="table-header">
                  <tr>
                    <th className="bg-secondary text-white">Order</th>
                    <th className="bg-secondary text-light">Name</th>
                    <th className="bg-secondary text-light">Phone</th>
                    <th className="bg-secondary text-light">Vehicle</th>
                    <th className="bg-secondary text-light">City</th>
                    <th className="bg-secondary text-light">Taluk</th>
                    <th className="bg-secondary text-light">District</th>
                  </tr>
                </thead>

                <tbody className="table-content">
                  {orders.map((order) => (
                    <tr key={order.orderId}>
                      <td>{order.orderId}</td>
                      <td>{order.custName}</td>
                      <td>{order.phone}</td>
                      <td>{order.vehicle}</td>
                      <td>{order.city}</td>
                      <td>{order.taluk}</td>
                      <td>{order.district}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="d-flex justify-content-center gap-2 mb-2 p-5">
              <span className="">
                <input
                  type="number"
                  className="form-control form-control-sm"
                  name="d_id"
                  value={d_id}
                  onChange={(e) => setD_id(e.target.value)}
                />
              </span>
              <span>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(d_id)}
                >
                  Delete
                </button>
              </span>
            </div>

            <div className="d-flex justify-content-end gap-1 p-5 mb-5">
              <button
                className="btn btn-primary btn-sm"
                disabled={currentPage === 1}
                onClick={handlePrev}
              >
                <i className="bi bi-arrow-left"></i>
              </button>
              <label className=" btn btn-sm border-dark">{currentPage}</label>
              <button
                className="btn btn-primary btn-sm"
                disabled={orders.length < 10}
                onClick={handleNext}
              >
                <i className="bi bi-arrow-right"></i>
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
export default Orders;
