import instance from "../index";

instance.defaults.baseURL = process.env.REACT_APP_ENDPOINT_AUTH_MNGR;
instance.defaults.headers.common["X-name"] = "Portal";
instance.defaults.headers.common["Content-type"] = "text/plain";

export default instance;
