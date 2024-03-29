import axios from "axios";

async function registerService(formData){
    await axios.post("user/register", {
        email: formData.email,
        password: formData.password,
        city: formData.city,
        name: formData.userName
    }).then((res) => {
        return {
            response: res,
            isError: false
        }
    }).catch((error) => {
        return {
            response: error.response,
            isError: true
        }
    });
}

export default registerService;
