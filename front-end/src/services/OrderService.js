import axios from "axios";

 const BASE_URL = "https://andavar-earth-movers.onrender.com/order";

 export const getOrders=()=>{
    return axios.get(`${BASE_URL}/get`);
 }

 export const deleteOrder=(d_id)=>{
    return axios.delete(`${BASE_URL}/delete/${d_id}`);
 }