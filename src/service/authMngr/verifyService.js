import instance from "./index";

async function verifyService(keyParam) {
  try {
    const res = await instance.post("/step203", {
      key: keyParam,
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

export default verifyService;
