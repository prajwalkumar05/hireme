import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { useForm } from "react-hook-form";
import { Typography } from "@mui/material";
import { InputBase, FormControl, FormHelperText } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import top100Films from "./data";
import countris from "./countries";
import Button from "@mui/material/Button";
import "./App.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: "#f8f9fa",
    border: "none",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "none",
    },
  },
}));

export default function Second() {
  const inputfocus = React.useRef(null);
  const inputfocuskeyword = React.useRef(null);

  const [salary, setSalary] = React.useState("");
  const [job, setJob] = React.useState("");
  const [expeiance, setExpeiance] = React.useState("");
  const [workType, setWorkType] = React.useState("");
  const [empType, setEmpType] = React.useState("");
  const [single, setSingle] = React.useState("");
  const [reqirements, setReqirements] = React.useState([]);
  const [keyword,setKeyWord]=React.useState("")
  const [keywords, setKeyWords] = React.useState([]);

  console.log(job.label);

  const handleReqirements = (e) => {
    e.preventDefault();
    const req = single.trim();

    if (req && !reqirements.includes(req)) {
      setReqirements((p) => {
        return [...p, req];
      });
    }
    setSingle("");
    inputfocus.current.focus();
  };

  const handleKeyWords = (e) => {
    e.preventDefault();
    const key = keyword.trim();

    if (key && !keywords.includes(key)) {
      setKeyWords((p) => {
        return [...p, key];
      });
    }
    setSingle("");
    inputfocuskeyword.current.focus();
  };

  console.log(reqirements);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
  };

  const onClick = (e) => {
    handleSubmit(onSubmit)
  };


  return (
    <>
      <Box
        sx={{
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        <Typography sx={{ py: 2 }} variant="h4" component="h2">
          Share You Jobs To Open Source
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <InputLabel sx={{ padding: "0px 0px 0px 6px", fontWeight: "600" }}>
              Job Title
            </InputLabel>
            <Autocomplete
            {...register("examplegg", { required: true })}
              onChange={(e,jobvalue) => setJob(jobvalue)}
              id="combo-box-demo"
              options={top100Films}
              getOptionLabel={(option) => option.label}
              renderInput={(params) => {
                const {InputLabelProps, InputProps, ...rest } = params;
                return (
                  <InputBase
                  
                    placeholder="JobTitle"
                    sx={{
                      marginTop: "10px",
                      borderRadius: "5px",
                      backgroundColor: "#f8f9fa",
                      border: "1px solid #f8f9fa",
                      marginBottom: "15px",
                      padding: "10px",
                      marginLeft:"0px"
                    }}
                    {...params.InputProps}
                    {...rest}
                  />
                );
              }}
            />
            {errors.examplegg && (
              <p style={{ color: "red", paddingLeft: "16px" }}>
                This field is empty{" "}
              </p>
            )}
          </Grid>
          <Grid xs={12} sm={6}>
            <InputLabel sx={{ padding: "12px 0px 0px 28px", fontWeight: "600" }}>
              Job Location
            </InputLabel>
            <Autocomplete
              id="combo-box-demo"
              options={countris}
              getOptionLabel={(option) => option}
              renderInput={(params) => {
                const { InputLabelProps, InputProps, ...rest } = params;
                return (
                  <InputBase
                    placeholder="Job Location"
                    sx={{
                      marginTop: "14px",
                      borderRadius: "5px",
                      backgroundColor: "#f8f9fa",
                      border: "1px solid #f8f9fa",
                      marginBottom: "15px",
                      padding: "10px",
                      marginLeft:"10px"
                    }}
                    {...params.InputProps}
                    {...rest}
                  />
                );
              }}
            />
            {errors.exampleloc && (
              <p style={{ color: "red", paddingLeft: "6px" }}>
                This field is empty{" "}
              </p>
            )}
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputLabel sx={{ padding: "0px 0px 0px 10px", fontWeight: "600" }}>
              Employement Type
            </InputLabel>
            <FormControl sx={{ m: 1 }} variant="standard" fullWidth>
              <Select
                {...register("exampleemp", { required: true })}
                labelId="demo-customized-select-label"
                id="demo-customized-select"
                value={empType}
                onChange={(e) => setEmpType(e.target.value)}
                input={<BootstrapInput />}
              >
                <MenuItem value={"FullTime"}>FullTime</MenuItem>
                <MenuItem value={"PartTime"}>PartTime</MenuItem>
                <MenuItem value={"Internship"}>Internship</MenuItem>
              </Select>
            </FormControl>
            {errors.exampleemp && (
              <p style={{ color: "red", paddingLeft: "6px" }}>
                This field is empty{" "}
              </p>
            )}
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputLabel sx={{ padding: "0px 0px 0px 10px", fontWeight: "600" }}>
              Work Type
            </InputLabel>
            <FormControl sx={{ m: 1 }} variant="standard" fullWidth>
              <Select
                {...register("examplework", { required: true })}
                label="pef"
                labelId="demo-customized-select-label"
                id="demo-customized-select"
                value={workType}
                onChange={(e) => setWorkType(e.target.value)}
                input={<BootstrapInput />}
              >
                <MenuItem value={"Hybrid"}>Hybrid</MenuItem>
                <MenuItem value={"OnSite"}>OnSite</MenuItem>
                <MenuItem value={"Remote"}>Remote</MenuItem>
              </Select>
            </FormControl>
            {errors.examplework && (
              <p style={{ color: "red", paddingLeft: "6px" }}>
                This field is empty{" "}
              </p>
            )}
          </Grid>
          <Grid sx={{ my: 1 }} item xs={12}>
            <InputLabel sx={{ padding: "0px 0px 0px 10px", fontWeight: "600" }}>
              Job Reqirements
            </InputLabel>
            <form onSubmit={handleReqirements}>
              <InputBase
                ref={inputfocus}
                onChange={(e) => setSingle(e.target.value)}
                value={single}
                endAdornment={
                  <AddCircleOutlineIcon
                    sx={{color:"#4045db"}}
                    onClick={handleReqirements}
                  ></AddCircleOutlineIcon>
                }
                placeholder="Work Type"
                sx={{
                  marginTop: "10px",
                  borderRadius: "5px",
                  backgroundColor: "#f8f9fa",
                  border: "1px solid #f8f9fa",
                  height: "6vh",
                  padding: "26px",
                }}
                fullWidth
              />
            </form>
            <Grid sx={{ my: 1 }} item xs={12}>
              <Stack
                sx={{
                  overflowX: "scroll",
                  "&::-webkit-scrollbar": { display: "none" },
                }}
                direction="row"
                spacing={1}
              >
                {reqirements &&
                  reqirements.map((item) => {
                    return <Chip label={item} />;
                  })}
              </Stack>
            </Grid>
          </Grid>

          <Grid sx={{ my: 1 }} item xs={12}>
            <InputLabel sx={{ padding: "0px 0px 0px 1px", fontWeight: "600" }}>
              Key Words
            </InputLabel>
            <form onSubmit={handleKeyWords}>
              <InputBase
                ref={inputfocuskeyword}
                onChange={(e) => setKeyWord(e.target.value)}
                value={keyword}
                endAdornment={
                  <AddCircleOutlineIcon
                  sx={{color:"#4045db"}}
                    onClick={handleKeyWords}
                  ></AddCircleOutlineIcon>
                }
                placeholder="Work Type"
                sx={{
                  marginTop: "10px",
                  borderRadius: "5px",
                  backgroundColor: "#f8f9fa",
                  border: "1px solid #f8f9fa",
                  height: "6vh",
                  padding: "26px",
                }}
                fullWidth
              />
            </form>
            <Grid sx={{ my: 1 }} item xs={12}>
              <Stack
                sx={{
                  overflowX: "scroll",
                  "&::-webkit-scrollbar": { display: "none" },
                }}
                direction="row"
                spacing={1}
              >
                {keywords &&
                  keywords.map((item) => {
                    return <Chip label={item} />;
                  })}
              </Stack>
            </Grid>
          </Grid>


          <Grid item xs={12}>
            <InputLabel sx={{ padding: "0px 0px 0px 10px", fontWeight: "600" }}>
              OverView
            </InputLabel>
            <InputBase
              
              placeholder="Tell us Know Your Jobs About"
              sx={{
                marginTop: "10px",
                borderRadius: "5px",
                backgroundColor: "#f8f9fa",
                border: "1px solid #f8f9fa",
                marginBottom: "15px",
                padding: "26px",
              }}
              fullWidth
              multiline
              rows={5}
              {...register("example", { required: true })}
            />
            {errors.example && (
              <p style={{ color: "red" }}>This field is empty </p>
            )}
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputLabel sx={{ padding: "0px 0px 0px 10px", fontWeight: "600" }}>
              Experience
            </InputLabel>
            <FormControl sx={{ m: 1 }} variant="standard" fullWidth>
              <Select
                {...register("exampleexp", { required: true })}
                labelId="demo-customized-select-label"
                id="demo-customized-select"
                value={expeiance}
                onChange={(e) => setExpeiance(e.target.value)}
                input={<BootstrapInput />}
              >
                <MenuItem value={"Fresher"}>Fresher</MenuItem>
                <MenuItem value={"1Year"}>1Year</MenuItem>
                <MenuItem value={"3Year"}>3Year</MenuItem>
              </Select>
            </FormControl>
            {errors.exampleexp && (
              <p style={{ color: "red", paddingLeft: "6px" }}>
                This field is empty{" "}
              </p>
            )}
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputLabel sx={{ padding: "0px 0px 0px 10px", fontWeight: "600" }}>
              Salary
            </InputLabel>
            <FormControl sx={{ m: 1 }} variant="standard" fullWidth>
              <Select
                {...register("examplesal", { required: true })}
                label="pef"
                labelId="demo-customized-select-label"
                id="demo-customized-select"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
                input={<BootstrapInput />}
              >
                <MenuItem value={"0-15000"}>0-15000</MenuItem>
                <MenuItem value={"15000-30000"}>15000-30000</MenuItem>
                <MenuItem value={"30000-50000"}>30000-50000</MenuItem>
                <MenuItem value={"50000-100000"}>50000-100000</MenuItem>
              </Select>
            </FormControl>
            {errors.examplesal && (
              <p style={{ color: "red", paddingLeft: "6px" }}>
                This field is empty{" "}
              </p>
            )}
          </Grid>
          <Grid item xs={6}>
            <Button
              onClick={onClick}
              type="submit"
              sx={{ mx: 2 }}
              variant="contained"
            >
              Just Send
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
