import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { TailSpin } from "react-loader-spinner";

const Form = ({
  handleSubmit,
  formData,
  handleChange,
  imageSrc,
  alertShow,
}) => {
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

          <p className="select-p">Select Townhall</p>
          <select
            name="category"
            required
            value={formData.category}
            id=""
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
          </select>

          <p className="select-p">Select Type</p>
          <select
            name="type"
            required
            id=""
            value={formData.type}
            onChange={handleChange}
          >
            <option value="">Select Type</option>
            <option value="war">War</option>
            <option value="trophy">Trophy</option>
            <option value="farming">Farming </option>
            <option value="fun"> Funny</option>
            <option value="hybrid">Hybrid</option>
          </select>
          <p>Upload Base Image </p>
          {imageSrc && (
            <AiFillDelete
              onClick={() => handleDeleteImage(index)}
              className="delete-img"
            />
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
                <TailSpin color={"#062DF6"} height="30" width="30" radius={2} />
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
