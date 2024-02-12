import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { TailSpin } from "react-loader-spinner";

const Form = ({
  handleSubmit,
  formData,
  handleChange,
  imageSrc,
  alertShow,
  handleDeleteImage,
}) => {
  const [selectedHall, setSelectedHall] = useState("");
  const handleSelectChange = (e) => {
    const { value } = e.target;
    setSelectedHall(value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="form-data">
          <label>
            <p>Uploader Name:</p>

            <input
              type="text"
              name="author"
              required
              value={formData.author}
              placeholder="Enter Your Name"
              onChange={handleChange}
            />
          </label>
          <p className="select-p">Select Townhall/Builderhall</p>
          <select required value={selectedHall} onChange={handleSelectChange}>
            <option value="">Select</option>
            <option value="townhall">Townhall</option>
            <option value="builderhall">Builder Hall</option>
          </select>

          {selectedHall === "townhall" && (
            <>
              <p className="select-p">Select Townhall Level</p>
              <select
                name="category"
                required
                value={formData.category}
                onChange={handleChange}
              >
                <option value="">Select Townhall</option>
                <option value="th16">Townhall 16</option>
                <option value="th15">Townhall 15</option>
                <option value="th14">Townhall 14</option>
                <option value="th13">Townhall 13</option>
                <option value="th12">Townhall 12</option>
                <option value="th11">Townhall 11</option>
                <option value="th10">Townhall 10</option>
                <option value="th9">Townhall 9</option>
                <option value="th8">Townhall 8</option>
                <option value="th7">Townhall 7</option>
                <option value="th6">Townhall 6</option>
                <option value="th5">Townhall 5</option>
              </select>
            </>
          )}
          {selectedHall === "builderhall" && (
            <>
              <p className="select-p">Select Builderhall Level</p>
              <select
                name="category"
                required
                value={formData.category}
                onChange={handleChange}
              >
                <option value="">Select Builderhall</option>
                <option value="bh10">Builder hall 10</option>
                <option value="bh9">Builder hall 9</option>
                <option value="bh8">Builder hall 8</option>
                <option value="bh7">Builder hall 7</option>
                <option value="bh6">Builder hall 6</option>
                <option value="bh5">Builder hall 5</option>
              </select>
            </>
          )}

          <p className="select-p">Select Type</p>
          <select
            name="type"
            required
            id=""
            value={formData.type}
            onChange={handleChange}
          >
            Select Type
            {selectedHall === "townhall" ? (
              <>
                <option value="">Select Type</option>
                <option value="war">War</option>
                <option value="trophy">Trophy</option>
                <option value="farming">Farming </option>
                <option value="fun"> Funny</option>
                <option value="hybrid">Hybrid</option>
                <option value="progress">Progress</option>
                <option value="anti 3 star">Anti 3 Star</option>
              </>
            ) : (
              <>
                <option value="">Select Type</option>
                <option value="trophy">Trophy</option>
                <option value="farming">Farming </option>
                <option value="fun"> Funny</option>
                <option value="hybrid">Hybrid</option>
                <option value="progress">Progress</option>
                <option value="anti 3 star">Anti 3 Star</option>
              </>
            )}
          </select>
          <p>Upload Base Image </p>
          {imageSrc && (
            <AiFillDelete onClick={handleDeleteImage} className="delete-img" />
          )}
          <label className="img-label">
            <h4 id="choose">Choose File</h4>
            <input
              type="file"
              className="myfile"
              accept="image/*"
              id={"file"}
              name="img"
              required
              onChange={handleChange}
            />
          </label>
          {imageSrc && (
            <img
              className="selected-image"
              src={imageSrc}
              alt="Selected file"
            />
          )}
          <label>
            <p>Add Base Link</p>
            <input
              type="text"
              required
              autoComplete="off"
              name="link"
              placeholder="Paste Your Base Link"
              value={formData.link}
              onChange={handleChange}
            />
          </label>
        </div>

        <div className="submit-btn-container">
          <button className="submit-btn" type="submit">
            {alertShow ? (
              <span id="spinner">
                <TailSpin color="white" height="30" width="30" radius={2} />
              </span>
            ) : (
              "Submit"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
