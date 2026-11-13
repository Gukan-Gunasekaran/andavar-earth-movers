import axios from "axios";

 const BASE_URL = "https://andavar-earth-movers.onrender.com";

 export const getOrders=(currentPage,colum,sVal)=>{
    return axios.get(`${BASE_URL}/order/get`,{
      params:{
         pNo:currentPage-1,
         col:colum,
         sVal:sVal
      }
    });
 };

 export const deleteOrder=(d_id)=>{
    return axios.delete(`${BASE_URL}/delete/${d_id}`);
 };