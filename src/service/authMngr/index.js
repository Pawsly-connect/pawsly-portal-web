import instance from "../index";

instance.defaults.baseURL = "https://d1i75zkrg41h7t.cloudfront.net";
instance.defaults.headers.common["X-name"] = "Portal";
instance.defaults.headers.common["Content-type"] = "text/plain"

export default instance;
