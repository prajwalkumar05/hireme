import React, { useState } from "react";
import { Box } from "@mui/system";
import {
  ButtonGroup,
  IconButton,
  Tooltip,
  Typography,
  Button,
  Skeleton,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import LocationOnIcon from "@mui/icons-material/LocationOn";
const Single = ({}) => {
  const [loading, setLoading] = useState(false);

  const [change, setChange] = useState(true);
  const [details, setDetails] = useState({
    company:"Microsoft",
    Location:"Delhi,karnataka",
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
    company,
    WorkType,
    Location,
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
    <Box sx={{ width: "100%", marginTop: "30px" }}>
      <Box
        sx={{
          width: "100%",
          //   border: "1px solid red",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 10px",
        }}
      >
        {loading ? (
          <>
            <Typography
              variant="h6"
              fontWeight={700}
              textTransform="capitalize"
              fontSize={20}
            >
              <Skeleton variant="text" width="200px" height={20} />
            </Typography>
            <ButtonGroup>
              <Tooltip title="add to favourites">
                <IconButton>
                  <Skeleton variant="circular" width={30} height={30} />
                </IconButton>
              </Tooltip>
              <Tooltip title="share">
                <IconButton>
                  <Skeleton variant="circular" width={30} height={30} />
                </IconButton>
              </Tooltip>
            </ButtonGroup>
          </>
        ) : (
          <>
            <>
              <input
                style={{
                  fontSize: "22px",
                  width: "auto",
                  fontWeight: "700",
                  colo: "#000",
                }}
                id="company"
                onChange={onChange}
                className={!change ? "new" : "newone"}
                disabled={!change}
                type="text"
                value={company}
              />
            </>
            <button onClick={(e) => setChange(!change)}>Edit</button>
          </>
        )}
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "5px 10px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {loading ? (
              <Skeleton variant="text" width={100} height={10} />
            ) : (
              <>
                <input
                  style={{ fontSize: "15px", fontWeight: "500" }}
                  id="Location"
                  onChange={onChange}
                  className={!change ? "new" : "newone"}
                  disabled={!change}
                  type="text"
                  value={Location}
                />
                
              </>
            )}
          </Box>
        </Box>
        {loading ? (
          ""
        ) : (
          <>
            {" "}
            <Typography variant="h6" fontSize={12} textTransform="none">
              Posted
              <Box component={"span"} sx={{ color: "text.secondary" }}>
                &nbsp;8 days ago
              </Box>
            </Typography>
          </>
        )}
      </Box>
      <Box
        sx={{
          //   border: "1px solid red",
          width: "100%",
          margin: "20px 0",
          //   border: "1px solid red",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {loading ? (
          <Skeleton variant="reactangular" width={"100%"} height={40} />
        ) : (
          <></>
        )}
      </Box>
    </Box>
  );
};

export default Single;
