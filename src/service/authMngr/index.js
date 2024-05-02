import instance from "../index";

instance.defaults.baseURL = "https://d3s6udfq6q4ih0.cloudfront.net";
instance.defaults.headers.common["X-name"] = "Portal";
instance.defaults.headers.common["Content-type"] = "text/plain"

export default instance;
