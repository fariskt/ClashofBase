import React, { useEffect, useState } from "react";
import "./UploadBase.css";
import Alert from "../Alert/Alert";
import Form from "./Form";

const UploadForm = () => {
  const [formData, setFormData] = useState({
    id: 0,
    category: "",
    img: null,
    link: "",
    type: "",
    author: "",
  });

  const [imageSrc, setImageSrc] = useState(null);
  const [alertShow, setAlertShow] = useState(null);
  const [currentId, setCurrentId] = useState(0);

  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      id: currentId,
    }));
  }, [currentId]);

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
      } else {
        setImageSrc(null);
      }
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      const response = await fetch(
        "https://clashof-base-api.vercel.app/api/layout",
        {
          method: "POST",
          body: formDataToSend,
        }
      );
      setCurrentId((prevId) => prevId + 1);
      if (response.ok) {
        setAlertShow(true);
        setTimeout(() => {
          setAlertShow(null);
        }, 3000);
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
      img: null,
    }));
    setImageSrc(null);
  };

  return (
    <div className="form-container">
      <div className="form-title">
        <h1>Upload Your Bases</h1>
      </div>
      <div className="form-container-section">
        <Form
          handleSubmit={handleSubmit}
          formData={formData}
          handleDeleteImage={handleDeleteImage}
          imageSrc={imageSrc}
          handleChange={handleChange}
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
