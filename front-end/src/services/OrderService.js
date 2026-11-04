import axios from "axios";

 const BASE_URL = "https://andavar-earth-movers.onrender.com/order";

 export const getOrders=(currentPage,colum)=>{
    return axios.get(`${BASE_URL}/get`,{
      params:{
         pNo:currentPage-1,
         col:colum
      }
    });
 };

 export const deleteOrder=(d_id)=>{
    return axios.delete(`${BASE_URL}/delete/${d_id}`);
 };