import React from "react";
import ImageGrid from "./ImageGrid";
import { get_images } from "../actions/images";
import { connect } from "react-redux";

const ImageDashboard = ({ get_images }) => {
  return (
    <div>
      <button
        className="btn btn-info btn-sm"
        onClick={get_images}
      >
        Refresh
      </button>
      <ImageGrid />
    </div>
  );
};

export default connect(null, { get_images })(
  ImageDashboard
);
