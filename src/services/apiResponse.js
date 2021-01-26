import React from "react";
import axios from "axios";
const ApiPostCall = (url, values, withjwtToken = false) => {
  // if(withjwtToken){
  //   //TODO: pass the value of header
  //  const header=  localStorage.getItem(token:'');
  // }
  return axios.post(url, values);
};
const ApiGetCall = (url) => {
  axios
    .get(url)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      alert(err);
    });
};

export default ApiPostCall;
