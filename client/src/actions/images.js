import keys from "../keys";
import {
  GET_IMG_FAILED,
  IMG_LOADED,
  IMG_LOADING,
} from "./types";

export const get_images = () => (dispatch) => {
  dispatch({
    type: IMG_LOADING,
  });
  fetch(`${keys.url}/api/images`)
    .then((res) => {
      if (!res.ok) {
        throw res;
      } else {
        return res.json();
      }
    })
    .then((data) => {
      dispatch({
        type: IMG_LOADED,
        payload: data,
      });
    })
    .catch((errRes) => {
      console.log(errRes);
      dispatch({
        type: GET_IMG_FAILED,
      });
    });
};
