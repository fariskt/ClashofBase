import React, { useState } from "react";
import "./UploadBase.css";
import Alert from "../Alert/Alert";
import Form from "./Form";

const UploadForm = () => {
  const [formData, setFormData] = useState({
    category: "",
    img: "",
    link: "",
    type: "",
    author: "",
  });

  const [imageSrc, setImageSrc] = useState(null);
  const [alertShow, setAlertShow] = useState(null);
  const [loading, setLoading] = useState(null);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    if (type === "file") {
      const file = e.target.files[0];
      setFormData((prevData) => ({ ...prevData, [name]: file }));

      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result);
      };
      if (file) {
        reader.readAsDataURL(file);
      }
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });
      const response = await fetch("https://clashof-base-api.vercel.app/api/layout", {
        method: "POST",
        body: formDataToSend,
      });
      if (response.ok) {
        setAlertShow(true);
        setLoading(false);
        setTimeout(() => {
          setAlertShow(null);
        }, 5000);
        setFormData({
          category: "",
          img: "",
          link: "",
          type: "",
          author: "",
        });
        setImageSrc(null);
        console.log("Layout data uploaded successfully");
      } else {
        setAlertShow(false);
        setTimeout(() => {
          setAlertShow(null);
        }, 3000);
        console.error("Failed to upload layout data");
      }
    } catch (error) {
      console.error("Error uploading layout data:", error);
    }
  };

  const handleDeleteImage = () => {
    setFormData((prevData) => ({
      ...prevData,
      img: "",
    }));
    setImageSrc(null);
  };

  return (
    <div className="form-container">
      <div className="form-title">
        <h1>Upload Your Base</h1>
      </div>
      <div className="form-container-section">
        <Form
          handleSubmit={handleSubmit}
          formData={formData}
          handleDeleteImage={handleDeleteImage}
          imageSrc={imageSrc}
          handleChange={handleChange}
          alertShow={loading}
        />
      </div>
      <div>
        {alertShow === false ? (
          <Alert type="error" message="Your Base Uploading Failed." />
        ) : (
          alertShow === true && (
            <Alert type="success" message="Your Base Uploaded Successfully" />
          )
        )}
      </div>
    </div>
  );
};

export default UploadForm;
