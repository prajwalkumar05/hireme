import React, { useState } from "react";
import CompanyInfo from "./CompanyInfo";
import ImageBox from "./ImageBox";
import TextField from "./Textfield";
import {
  Button,
} from "@mui/material";
import './App.css'

const CompanyProfile = () => {
  const [change, setChange] = useState(false);
  const [details, setDetails] = useState({
    company:"Microsoft",
    Location:"Delhi,India",
    industry: "Software-Development",
    Headquatars: "sagar,karnataka",
    WebsiteLink: "www.justexample.com",
    Benifits: "coffee,movies,money,gym",
    specialities: "US Branch",
    WorkType: "offline",
    overview:
      "computing, computer software, quantum computing, e-commerce, artificial intelligence,[9] and consumer electronics. It has been referred to as the most powerful company in the world and one of the world's most valuable brands due to its market dominance, data collection, and technological advantages in the area of artificial intelligence.[11][12][13] It is considered one of the Big Five American information technology companies, alongside Amazon, Apple, Meta, and Microsoft.",
  });
  console.log(details);

  const {
    WorkType,
    content,
    industry,
    Headquatars,
    WebsiteLink,
    Benifits,
    specialities,
    overview,
  } = details;

  const [selectedImage, setSelectedImage] = useState(null);
  const [profileSelectedImage, setProfileSelectedImage] = useState(null);



  const onChange = (e) => {
    setDetails((p) => ({
      ...p,
      [e.target.id]: e.target.value,
    }));
  };
  return <div style={{width:"80%",margin:"0px auto",marginBottom:"50px"}}>
    <ImageBox change={change} selectedImage={selectedImage} profileSelectedImage={profileSelectedImage} setSelectedImage={setSelectedImage} setProfileSelectedImage={setProfileSelectedImage} />
    <CompanyInfo {...details} setChange={setChange} change={change} onChange={onChange}  />
    <TextField {...details} onChange={onChange} change={change} />
    <Button
          sx={{
            marginTop:"50px",
            backgroundColor: "#4045db",
            padding: "5px 28px",
          }}
          onClick={(e) => setChange(!change)}
          variant="contained"
        >
          {change ? "save" : "edit"}
        </Button>
  </div>;
};

export default CompanyProfile;
