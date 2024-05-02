import instance from "./index";
<<<<<<< HEAD
import cipher from '../../utilities/cipher';

async function loginService(formData) {
    try {
        const res = await instance.post("/V1/user/login", {
          email: formData.email,
          password: await cipher.hash(formData.password)
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
=======
import hash from "../../utilities/cipher";

async function loginService(formData) {
  try {
    const res = await instance.post("/V1/user/login", {
      email: formData.email,
      password: await hash(formData.password),
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
>>>>>>> 3ad7c8368ef528e21699b7fe1aa7bea802b521a1
}

export default loginService;
