import instance from './index';

async function verifyService(keyParam) {
  try {
    const res = await instance.post(process.env.REACT_APP_PATH_STEP_203, {
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
