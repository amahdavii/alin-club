import Axios from "axios/index";
import { getToken, removeToken, removeUser } from "./tokenManager";

const Request = (config) => {
  const needToken = config.needToken;
  const redirectLogin = () => {
    if (typeof window !== "undefined") {
      let href = window.location.href;
      href = href.replace("/" + window.location.search, "");
      if (window.location.origin !== href) {
        window.location.replace("/?redirect=" + window.location.pathname);
      }
    }
  };
  const removeTokens = () => {
    // removeToken();
    // removeUser();
    // redirectLogin();
  };

  Axios.interceptors.request.use(
    async function (config) {
      // if (needToken) {
        // Object.assign(config.headers, {
        //   Authorization:'Bearer '+getToken("accessToken"),
        // });
      // }
      return config;
    },
    function (error) {
      // return Promise.reject(error);
    }
  );

  Axios.interceptors.response.use(
    function (response) {       
      return response;
    },
    function (error) {
      
      var openModal=false
      // console.log('heeeeey',error.response)
      // if (!error.response && !openModal) {
      //   openModal=true        
      //   Modal.error({
      //     okText:'تلاش مجدد',
      //     content: (
      //       <div>
      //         <p>ارتباط شما با سرور قطع شده است</p>
      //         <p>لطفا دوباره تلاش کنید</p>
      //       </div>
      //     ),
      //     onOk() {
      //       window.location.reload();
      //       openModal=false
      //     },
      //   });
      // }
      // else 
      // if(error.response.status==422){
      //   // console.log('iteeeems', error.response.data.data.details)
      //   // console.log('iteeeems', error.response.data.data.details.length)


      //   error.response?.data?.data?.details?.forEach(item=>{
      //     // console.log('iteeeems',item.message[0])
      //     message.error(item.message[0])
      //   })
      // }
      // if (error.response.status === 400) {      
      //   error.response?.data?.messages?.forEach(item=>{
      //     if(item.type=="error"){
      //       message.error(item.text)

      //     }
      //     else{
      //       message.success(item.text)
      //     }
      //   })
      // }
      // if (error.response.status === 403) { 
      //   error.response?.data?.messages?.forEach(item=>{
      //     if(item.type=="error"){
      //       message.error(item.text)

      //     }
      //     else{
      //       message.success(item.text)
      //     }
      //   }) 
      //   removeTokens();
      // }
      // else if (error.response.status === 500 || error.response.status === 429) {
      //   if(!openModal){
      //     openModal=true        
      //     Modal.error({
      //       okText:'تلاش مجدد',
      //       content: (
      //         <div>
      //           <p>خطای ارتباط با سرور</p>
      //           <p>لطفا دوباره تلاش کنید</p>
      //         </div>
      //       ),
      //       onOk() {
      //         window.location.reload();
      //         openModal=false
      //       },
      //     });
      //   }
      // }
      // else{
      //   //console.log('error.response',error.response)
      // }
    }
  );
  return Axios.request(config);
};
export default Request;
