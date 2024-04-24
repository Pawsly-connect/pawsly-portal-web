import instance from "./index";
import hash from '../../utilities/cipher';

async function loginService(formData) {
    try {
        const res = await instance.post("/V1/user/login", {
          email: formData.email,
          password: await hash(formData.password)
        });
        return {
          response: res,
          isError: false,
        }
      } catch (err) {
        return {
          response: err.response || err,
          isError: true,
        }
      }
}

export default loginService;
