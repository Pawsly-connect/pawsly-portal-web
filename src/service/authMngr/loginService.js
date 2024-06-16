import instance from "./index";
import cipher from "../../utilities/cipher";

async function loginService(formData) {
  try {
    const res = await instance.post(process.env.REACT_APP_PATH_STEP_202, {
      email: formData.email,
      password: await cipher.hash(formData.password),
    });
    return {
      response: res,
      isError: false,
    };
  } catch (err) {
    return {
      response: err.response || err,
      isError: true,
    };
  }
}

export default loginService;
