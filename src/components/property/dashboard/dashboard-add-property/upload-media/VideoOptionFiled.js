"use client";
import Select from "react-select";

const videoField = [
  { value: "Youtube", label: "Youtube" },
];

const customStyles = {
  option: (styles, { isFocused, isSelected, isHovered }) => {
    return {
      ...styles,
      backgroundColor: isSelected
        ? "#eb6753"
        : isHovered
        ? "#eb675312"
        : isFocused
        ? "#eb675312"
        : undefined,
    };
  },
};

const VideoOptionFiled = ({setYouTubeLink}) => {
  return (
    <>
      <div className="col-sm-6 col-xl-4">
        <div className="mb30">
          <label className="heading-color ff-heading fw600 mb10">
            Video de
          </label>
          <div className="location-area">
            <Select
              defaultValue={[videoField[1]]}
              name="colors"
              options={videoField}
              styles={customStyles}
              className="select-custom pl-0"
              classNamePrefix="select"
              required
              isMulti
              
            />
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-xl-4">
        <div className="mb30">
          <label className="heading-color ff-heading fw600 mb10">
            Inserta URL del video
          </label>
          <input type="text" className="form-control" placeholder="enlace" onChange={(e) => setYouTubeLink(e.target.value)} />
        </div>
      </div>
    </>
  );
};

export default VideoOptionFiled;
