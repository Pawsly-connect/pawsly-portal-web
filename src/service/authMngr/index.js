import axios from "axios";

const instance = axios.create();

instance.defaults.baseURL =
  "https://d1i75zkrg41h7t.cloudfront.net/auth-mngr-stg";
instance.defaults.headers.common["X-name"] = "Portal";
//instance.defaults.headers.common["X-api-key"] = "apikey";

export default instance;
