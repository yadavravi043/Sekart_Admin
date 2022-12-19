import { userContants } from "../constant/constant";
import axios from "../helpers/axios";

export const signup = (user) => {
  return async (dispatch) => {
    dispatch({ type: userContants.USER_REGISTER_REQUEST });
    const res = await axios.post(`/admin/signup`, {
      ...user,
    });

    if (res.status === 201) {
      const { msg } = res.data;
      dispatch({
        type: userContants.USER_REGISTER_SUCCESS,
        payload: { msg },
      });
    } else {
      if (res.status === 400) {
        dispatch({
          type: userContants.USER_REGISTER_FAILURE,
          payload: { error: res.data.error },
        });
      }
    }
  };
};
