import axios from "axios";
import { useEffect, useState } from "react";

function Orders() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/order/get")
      .then((response) => setOrders(response.data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div className="container justify-contents-center vh-100">
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
    </div>
  );
}
export default Orders;
