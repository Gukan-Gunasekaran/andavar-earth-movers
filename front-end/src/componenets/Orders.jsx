import axios from "axios";
import { useEffect, useState } from "react";
import { deleteOrder, getOrders } from "../services/OrderService";

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    loadOrders();
  }, []);

  const loadOrders = () => {
    getOrders()
      .then((response) => setOrders(response.data))
      .catch((error) => console.error(error));
  };

  const [d_id, setD_id] = useState("");

  const handleDelete = (d_id) => {
    deleteOrder(d_id)
      .then(() => {
        setD_id("");
        loadOrders();
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="vh-100">
      <div className="container justify-contents-center mt-5">
        <div className="d-flex justify-content-start gap-2">
          <span>
            <select className="form-select form-select-sm">
              <option value="n_o">name</option>
              <option value="ph_o">phone</option>
              <option value="c_o">city</option>
              <option value="t_o">taluk</option>
              <option value="d_o">district</option>
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
        <table className="table table-bordered my-5 w-75">
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
              <tr key={order.o_id}>
                <td>{order.o_id}</td>
                <td>{order.c_name}</td>
                <td>{order.phone}</td>
                <td>{order.city}</td>
                <td>{order.taluk}</td>
                <td>{order.district}</td>
              </tr>
            ))}
          </tbody>
        </table>

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

        <div className="d-flex justify-content-end gap-2">
          <button className="btn border-primary btn-sm">prev</button>{" "}
          <button className="btn border-success btn-sm">next</button>
        </div>
      </div>
    </div>
  );
}
export default Orders;
