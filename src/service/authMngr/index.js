import axios from "axios";

const instance = axios.create();

instance.defaults.baseURL = process.env.REACT_APP_ENDPOINT_AUTH_MNGR;
instance.defaults.headers.common["X-name"] = "Portal";
instance.defaults.headers.common["X-api-key"] = process.env.REACT_APP_APIKEY_AUTH_MNGR;

export default instance;
