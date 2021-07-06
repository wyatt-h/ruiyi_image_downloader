import keys from "../keys";
import {
  GET_IMG_FAILED,
  IMG_LOADED,
  IMG_LOADING,
  REFRESHING,
  REFRESH_FAILED,
  REFRESH_SUCCESS,
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
      console.log(data);
      dispatch({
        type: IMG_LOADED,
        payload: data,
      });
    })
    .catch((errRes) => {
      errRes
        .json()
        .then((err) => console.log(err));
      dispatch({
        type: GET_IMG_FAILED,
      });
    });
};

export const refresh_images =
  () => (dispatch) => {
    dispatch({
      type: REFRESHING,
    });
    fetch(`${keys.url}/api/images/refresh`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw res;
        }
      })
      .then((data) => {
        dispatch({ type: REFRESH_SUCCESS });
        dispatch(get_images(1));
      })
      .catch((errRes) => {
        dispatch({ type: REFRESH_FAILED });
        errRes
          .json()
          .then((err) => console.log(err));
      });
  };
