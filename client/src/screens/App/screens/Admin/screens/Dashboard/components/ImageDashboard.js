import React from "react";
import ImageGrid from "../../../../../components/ImageGrid";
import { refresh_images } from "../../../../../../../actions/images";
import { connect } from "react-redux";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import pLimit from "p-limit";

const ImageDashboard = ({ refresh_images, images }) => {
  const limit = pLimit(250);

  const downloadIMGs = async () => {
    console.log("download clicked");
    var zip = new JSZip();
    var imgFetches = [];
    var imgNames = [];
    images.forEach((image, index) => {
      console.log(limit.pendingCount);
      const imageBlob = limit(() =>
        fetch(image.url).then((response) => response.blob())
      );
      imgNames[index] = `${index}_${image.tag}_${image.name}.jpg`;
      imgFetches.push(imageBlob);
    });
    await Promise.all(imgFetches)
      .then(async (values) => {
        console.log("completed");
        console.log(imgFetches);
        console.log(values);
        await values.forEach(async (imageBlob, index) => {
          const imageData = await new File([imageBlob], "filename.jpg");
          await zip.file(imgNames[index], imageData);
        });
      })
      .then(() => {
        console.log(zip);
        zip.generateAsync({ type: "blob" }).then(function (blob) {
          saveAs(blob, "ruiyi_images.zip");
        });
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="img-dashboard">
      <button
        className="btn btn-info btn-sm refresh-btn"
        onClick={refresh_images}
      >
        Refresh
      </button>
      <button className="btn btn-warning btn-sm" onClick={downloadIMGs}>
        Download
      </button>
      <ImageGrid />
    </div>
  );
};

const mapStateToProps = (state) => ({
  images: state.images.images,
});

export default connect(mapStateToProps, {
  refresh_images,
})(ImageDashboard);
