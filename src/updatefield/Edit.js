import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BusinessIcon from "@mui/icons-material/Business";
import {Typography } from "@mui/material";
import Box from "@mui/material/Box";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import BarChartIcon from "@mui/icons-material/BarChart";
import LinkIcon from "@mui/icons-material/Link";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";

const Edit = () => {


  const [change, setChange] = useState(true);
  const [details, setDetails] = useState({
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

  const onSubmit = () => {
    console.log("run");
  };

  const onChange = (e) => {
    setDetails((p) => ({
      ...p,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <div>
      <Grid sx={{ justifyContent: "center" }} container spacing={6}>
        <Grid item xs={6}>
          <>
            <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Typography
                variant="h6"
                fontSize={18}
                fontWeight={700}
                component="h6"
                padding={"5px 0 15px 0"}
                sx={{ color: "text.primary" }}
              >
                Industry
              </Typography>
              <LocationOnIcon
                fontSize="small"
                sx={{ marginBottom: "10px", color: "text.secondary" }}
              />
            </Box>
            <input
              style={{ fontSize: "16px", width: "100%" }}
              id="industry"
              onChange={onChange}
              className={!change ? "new" : "newone"}
              disabled={!change}
              type="text"
              value={industry}
            />
          </>
        </Grid>
        <Grid item xs={6}>
          <>
            <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Typography
                variant="h6"
                fontSize={18}
                fontWeight={700}
                component="h6"
                padding={"5px 0 15px 0"}
                sx={{ color: "text.primary" }}
              >
                Headquatars
              </Typography>
              <BusinessIcon
                fontSize="small"
                sx={{ marginBottom: "10px", color: "text.secondary" }}
              />
            </Box>
            <input
              style={{ fontSize: "16px", width: "100%" }}
              id="Headquatars"
              onChange={onChange}
              className={!change ? "new" : "newone"}
              disabled={!change}
              type="text"
              value={Headquatars}
            />
          </>
        </Grid>
        <Grid item xs={6}>
          <>
            <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Typography
                variant="h6"
                fontSize={18}
                fontWeight={700}
                component="h6"
                padding={"5px 0 15px 0"}
                sx={{ color: "text.primary" }}
              >
                WebsiteLink
              </Typography>
              <LinkIcon
                fontSize="small"
                sx={{ marginBottom: "10px", color: "text.secondary" }}
              />
            </Box>
            <input
              style={{ fontSize: "16px", width: "100%" }}
              id="WebsiteLink"
              onChange={onChange}
              className={!change ? "new" : "newone"}
              disabled={!change}
              type="text"
              value={WebsiteLink}
            />
          </>
        </Grid>
        <Grid item xs={6}>
          <>
            <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Typography
                variant="h6"
                fontSize={18}
                fontWeight={700}
                component="h6"
                padding={"5px 0 15px 0"}
                sx={{ color: "text.primary" }}
              >
                Benifits
              </Typography>
              <FamilyRestroomIcon
                fontSize="small"
                sx={{ marginBottom: "10px", color: "text.secondary" }}
              />
            </Box>
            <input
              style={{ fontSize: "16px", width: "100%" }}
              id="Benifits"
              onChange={onChange}
              className={!change ? "new" : "newone"}
              disabled={!change}
              type="text"
              value={Benifits}
            />
          </>
        </Grid>
        <Grid item xs={12}>
          <>
            <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Typography
                variant="h6"
                fontSize={18}
                fontWeight={700}
                component="h6"
                padding={"5px 0 15px 0"}
                sx={{ color: "text.primary" }}
              >
                Overview
              </Typography>
              <LocalPostOfficeIcon
                fontSize="small"
                sx={{ marginBottom: "10px", color: "text.secondary" }}
              />
            </Box>
            <textarea
              cols="30"
              rows="4"
              style={{
                resize: "none",
                fontSize: "16px",
                width: "100%",
                fontWeight:"400"
              }}
              onChange={onChange}
              className={!change ? "new" : "newone"}
              id="overview"
              type="text"
              value={overview}
              disabled={!change}
            />
          </>
        </Grid>
        <Grid item xs={6}>
          <>
            <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Typography
                variant="h6"
                fontSize={18}
                fontWeight={700}
                component="h6"
                padding={"5px 0 15px 0"}
                sx={{ color: "text.primary" }}
              >
                WorkType
              </Typography>
              <WorkOutlineIcon
                fontSize="small"
                sx={{ marginBottom: "10px", color: "text.secondary" }}
              />
            </Box>
            <input
              style={{ fontSize: "16px", width: "100%" }}
              id="WorkType"
              onChange={onChange}
              className={!change ? "new" : "newone"}
              disabled={!change}
              type="text"
              value={WorkType}
            />
          </>
        </Grid>
        <Grid item xs={6}>
          <>
            <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Typography
                variant="h6"
                fontSize={18}
                fontWeight={700}
                component="h6"
                padding={"5px 0 15px 0"}
                sx={{ color: "text.primary" }}
              >
                Specialities
              </Typography>
              <BarChartIcon
                fontSize="small"
                sx={{ marginBottom: "10px", color: "text.secondary" }}
              />
            </Box>
            <input
              style={{ fontSize: "16px", width: "100%" }}
              id="specialities"
              onChange={onChange}
              className={!change ? "new" : "newone"}
              disabled={!change}
              type="text"
              value={specialities}
            />
          </>
        </Grid>
      </Grid>
    </div>
  );
};

export default Edit;
