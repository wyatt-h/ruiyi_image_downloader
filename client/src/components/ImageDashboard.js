import React, { useEffect } from "react";
import ImageGrid from "./ImageGrid";
import {
  get_images,
  refresh_images,
} from "../actions/images";
import { connect } from "react-redux";

const ImageDashboard = ({
  get_images,
  refresh_images,
}) => {
  useEffect(() => {
    get_images();
  }, []);
  return (
    <div className="img-dashboard">
      <button
        className="btn btn-info btn-sm refresh-btn"
        onClick={refresh_images}
      >
        Refresh
      </button>
      <button className="btn btn-warning btn-sm">
        Download
      </button>
      <ImageGrid />
    </div>
  );
};

export default connect(null, {
  get_images,
  refresh_images,
})(ImageDashboard);
