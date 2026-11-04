import axios from "axios";
import { useEffect, useState } from "react";
import { deleteOrder, getOrders } from "../services/OrderService";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [colum, setColumn] = useState("orderId");
  useEffect(() => {
    loadOrders();
  }, [currentPage, colum]);

  const loadOrders = (page = currentPage, column = colum) => {
    getOrders(page, column)
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
    <div className="">
      <div className="container justify-contents-center mt-5">
        <div className="d-flex justify-content-start gap-2">
          <span>
            <select
              name="colum"
              className="form-select form-select-sm"
              value={colum}
              onChange={handleSelect}
            >
              <option value="orderID">order</option>
              <option value="custName">name</option>
              <option value="phone">phone</option>
              <option value="city">city</option>
              <option value="taluk">taluk</option>
              <option value="district">district</option>
            </select>
          </span>
          <span>
            <h3>ORDERS</h3>
          </span>

          <span>
            <input type="number" className="form-control form-control-sm" />
          </span>
          <i className="bi bi-search pt-1 me-5"></i>
        </div>
        <div className="table-responsive">
          <table className="table table-hover table-bordered  my-5 align-middle">
            <thead className="table-header">
              <tr>
                <th>Order</th>
                <th>Name</th>
                <th>Phone</th>
                <th>City</th>
                <th>Taluk</th>
                <th>District</th>
              </tr>
            </thead>

            <tbody className="table-content">
              {orders.map((order) => (
                <tr key={order.orderId}>
                  <td>{order.orderId}</td>
                  <td>{order.custName}</td>
                  <td>{order.phone}</td>
                  <td>{order.city}</td>
                  <td>{order.taluk}</td>
                  <td>{order.district}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="d-flex justify-content-center gap-2">
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

        <div className="d-flex justify-content-end gap-2 mb-2">
          <button
            className="btn border-primary btn-sm me-2"
            disabled={currentPage === 1}
            onClick={handlePrev}
          >
            prev
          </button>
          <button
            className="btn border-success btn-sm"
            disabled={orders.length < 10}
            onClick={handleNext}
          >
            next
          </button>
        </div>
      </div>
    </div>
  );
}
export default Orders;
