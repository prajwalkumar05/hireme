import React, { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import AutoComplete from "./AutoComplete";
import "./Style.css";
import SelectOption from "./SelectOption";
import OverView from "./OverView";
import MultiType from "./MultiType";
import Button from "@mui/material/Button";

const JobApplication = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = React.useState("");
  const [workType, setWorkType] = React.useState("");
  const [empType, setEmpType] = React.useState("");
  const [expeiance, setExpeiance] = React.useState("");
  const [overView, setOverView] = React.useState("");
  const [keywords, setKeyWords] = React.useState([]);
  const [reqirements, setReqirements] = React.useState([]);

  console.log(jobTitle, location, overView);


  const onClick = (e) => {};
  return (
    <Container maxWidth="md">
      <Box
        sx={{ height: "100%", border: "1px solid red", padding: "60px 40px" }}
      >
        <AutoComplete setJobTitle={setJobTitle} setLocation={setLocation} />
        <SelectOption
          setSalary={setSalary}
          setWorkType={setWorkType}
          setEmpType={setEmpType}
          setExpeiance={setExpeiance}
          salary={salary}
          workType={workType}
          empType={empType}
          expeiance={expeiance}
        />
        <MultiType reqirements={reqirements} keywords={keywords} setKeyWords={setKeyWords} setReqirements={setReqirements} />
        <OverView setOverView={setOverView} />
        <Button
          onClick={onClick}
          type="submit"
          sx={{ bgcolor: "#4045db", my: 4 }}
          variant="contained"
        >
          Just Send
        </Button>
      </Box>
    </Container>
  );
};

export default JobApplication;
