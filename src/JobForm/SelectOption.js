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
import Autocomplete from "@mui/material/Autocomplete";
import top100Films from "./data";
import countris from "./countries";
import Button from "@mui/material/Button";
import "./Style.css";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: "#fff",
    border: "none",
    fontSize: 16,
  },
}));

const SelectOption = ({  salary,workType,empType,expeiance,setSalary,setWorkType,setEmpType,setExpeiance}) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} sx={{ marginBottom: "10px" }}>
        <InputLabel sx={{ fontWeight: "600", marginBottom: "10px" }}>
          Employement Type
        </InputLabel>
        <Select
          fullWidth
          sx={{
            borderRadius: "5px",
            border: "1px solid #ccc",
            padding: "5px 12px",
          }}
          labelId="demo-customized-select-label"
          value={empType}
          onChange={(e) => setEmpType(e.target.value)}
          input={<BootstrapInput />}
        >
          <MenuItem value={"FullTime"}>FullTime</MenuItem>
          <MenuItem value={"PartTime"}>PartTime</MenuItem>
          <MenuItem value={"Internship"}>Internship</MenuItem>
        </Select>
      </Grid>
      <Grid item xs={12} sm={6} sx={{ marginBottom: "10px" }}>
        <InputLabel sx={{ fontWeight: "600", marginBottom: "10px" }}>
          Work Type
        </InputLabel>
        <Select
          fullWidth
          sx={{
            boxSizing: "border-box",
            borderRadius: "5px",
            border: "1px solid #ccc",
            padding: "5px 12px",
          }}
          label="pef"
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          value={workType}
          onChange={(e) => setWorkType(e.target.value)}
          input={<BootstrapInput />}
        >
          <MenuItem sx={{ backgroundColor: "#fff" }} value={"Hybrid"}>
            Hybrid
          </MenuItem>
          <MenuItem value={"OnSite"}>OnSite</MenuItem>
          <MenuItem value={"Remote"}>Remote</MenuItem>
        </Select>
      </Grid>

      <Grid item xs={12} sm={6} sx={{ marginBottom: "20px" }}>
        <InputLabel sx={{ fontWeight: "600", marginBottom: "10px" }}>
          Experiance
        </InputLabel>
        <Select
          fullWidth
          sx={{
            boxSizing: "border-box",
            borderRadius: "5px",
            border: "1px solid #ccc",
            padding: "5px 12px",
          }}
          label="pef"
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
      </Grid>

      <Grid item xs={12} sm={6} sx={{ marginBottom: "20px" }}>
        <InputLabel sx={{ fontWeight: "600", marginBottom: "10px" }}>
          salary
        </InputLabel>
        <Select
          fullWidth
          sx={{
            boxSizing: "border-box",
            borderRadius: "5px",
            border: "1px solid #ccc",
            padding: "5px 12px",
          }}
          label="pef"
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          input={<BootstrapInput />}
        >
          <MenuItem value={"15k-30k"}>15k-30k</MenuItem>
          <MenuItem value={"30k-50k"}>30k-50k</MenuItem>
        </Select>
      </Grid>
    </Grid>
  );
};

export default SelectOption;
