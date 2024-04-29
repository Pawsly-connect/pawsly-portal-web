import axios from "axios";

const instance = axios.create();

instance.defaults.baseURL = "https://1vd78290pl.execute-api.us-east-1.amazonaws.com/auth-mngr-stg";
instance.defaults.headers.common["X-name"] = "Portal";
//instance.defaults.headers.common["X-api-key"] = "";

export default instance;
