import React from "react";
import { connect } from "react-redux";

const ImageGrid = ({
  isLoading,
  isLoaded,
  images,
}) => {
  const loadImages = () => {
    if (isLoading) {
      return (
        <h1>The page is loading, please wait</h1>
      );
    } else if (isLoaded) {
      return images.map((image, index) => (
        <div key={index} className="img-box">
          <img
            src={image.url}
            alt="blank image"
            width="250"
            height="250"
          />
        </div>
      ));
    } else {
      return <h1>nothing here</h1>;
    }
  };
  return (
    <div className="img-grid">{loadImages()}</div>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.images.img_loading,
  isLoaded: state.images.img_loaded,
  images: state.images.images,
});

export default connect(
  mapStateToProps,
  null
)(ImageGrid);
