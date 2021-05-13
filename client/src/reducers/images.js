import {
  IMG_LOADING,
  IMG_LOADED,
  GET_IMG_FAILED,
} from "../actions/types";

const initialState = {
  images: [],
  img_loading: false,
  img_loaded: false,
};

export default function (
  state = initialState,
  action
) {
  switch (action.type) {
    case IMG_LOADING:
      return {
        ...state,
        img_loading: true,
        img_loaded: false,
      };
    case IMG_LOADED:
      return {
        ...state,
        images: action.payload,
        img_loading: false,
        img_loaded: true,
      };
    case GET_IMG_FAILED:
      return {
        ...state,
        img_loading: false,
        img_loaded: false,
      };
    default:
      return state;
  }
}
