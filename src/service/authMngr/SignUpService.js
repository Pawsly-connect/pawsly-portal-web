import instance from "./index";
import cipher from '../../utilities/cipher';

async function registerService(formData) {
  try {
    const res = await instance.post("step201", {
      email: formData.email,
      password: await cipher.hash(formData.password),
      city: formData.city,
      name: formData.name,
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

export default registerService;
