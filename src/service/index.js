import axios from "axios";
import cipher from "../utilities/cipher";

const newInstance = axios.create();

newInstance.interceptors.request.use(
    async (config) => {
        const contentCipher = await cipher.encrypt(JSON.stringify(config.data));
        config.data = `${contentCipher}`;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default newInstance;
