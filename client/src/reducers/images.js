import {
  IMG_LOADING,
  IMG_LOADED,
  GET_IMG_FAILED,
  REFRESHING,
  REFRESH_SUCCESS,
  REFRESH_FAILED,
} from "../actions/types";

const initialState = {
  images: [],
  img_loading: false,
  img_loaded: false,
  page_has_more: true,
};

export default function (
  state = initialState,
  action
) {
  switch (action.type) {
    case REFRESHING:
    case IMG_LOADING:
      return {
        ...state,
        img_loading: true,
        img_loaded: false,
      };
    case REFRESH_SUCCESS:
      return {
        ...state,
        images: [],
        img_loading: false,
        img_loaded: true,
      };
    case IMG_LOADED:
      return {
        ...state,
        images: action.payload,
        img_loading: false,
        img_loaded: true,
      };
    case REFRESH_FAILED:
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
