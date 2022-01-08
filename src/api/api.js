import Request from "../lib/request";
const { REACT_APP_API_ENDPOINT } = process.env;
const baseUrl="http://club-core.griffinmart.com/api/"

//---------------------------- main baner--------------------------------
export const banerApi = () => { 
  return Request({
    method: "get",
    url: baseUrl + "actions",
    needToken:true,
  });
};

//---------------------------- lottery--------------------------------
export const lotteryApi = () => { 
  return Request({
    method: "get",
    url: baseUrl + "draws",
    needToken:true,
  });
};
//---------------------------- prize--------------------------------
export const prizeApi = () => { 
  return Request({
    method: "get",
    url: baseUrl + "prizes",
    needToken:true,
  });
};
//---------------------------- transaction--------------------------------
// {
//   "customer_id": 1
// }
export const getTotalTransactionApi = (body) => { 
  return Request({
    method: "post",
    url: baseUrl + "transactions/total",
    needToken:true,
    data:body
  });
};


