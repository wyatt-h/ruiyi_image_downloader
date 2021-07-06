import React, {
  useEffect,
  useRef,
  useCallback,
  useState,
} from "react";
import { connect } from "react-redux";
import { get_images } from "../actions/images";

const ImageGrid = ({
  isLoading,
  isLoaded,
  images,
  get_images,
  hasMore,
}) => {
  // const [pageNumber, setPageNumber] = useState(1);
  useEffect(() => get_images(), []);
  // const observer = useRef();
  // const lastImageBoxRef = useCallback(
  //   (node) => {
  //     if (isLoading) return;
  //     if (observer.current)
  //       observer.current.disconnect();
  //     observer.current = new IntersectionObserver(
  //       (entries) => {
  //         if (
  //           entries[0].isIntersecting &&
  //           hasMore
  //         ) {
  //           setPageNumber(
  //             (prevPageNumber) =>
  //               prevPageNumber + 1
  //           );
  //         }
  //       }
  //     );
  //     if (node) observer.current.observe(node);
  //     console.log(node);
  //   },
  //   [isLoading, hasMore]
  // );

  return (
    <div className="img-grid">
      {isLoading && <h1>Loading...</h1>}
      {isLoaded &&
        images.map((image, index) => {
          {
            /* if (index + 1 === images.length) {
            return (
              <div
                key={index}
                className="img-box"
                // ref={lastImageBoxRef}
              >
                <img
                  src={image.url}
                  alt="blank image"
                  width="250"
                  height="250"
                />
              </div>
            );
          } else { */
          }
          return (
            <div key={index} className="img-box">
              <img
                src={image.url}
                alt="blank image"
                width="250"
                height="250"
              />
            </div>
          );
          {
            /* } */
          }
        })}
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.images.img_loading,
  isLoaded: state.images.img_loaded,
  images: state.images.images,
  hasMore: state.images.page_has_more,
});

export default connect(mapStateToProps, {
  get_images,
})(ImageGrid);
