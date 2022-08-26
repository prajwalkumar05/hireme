import React from "react";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Select from "@mui/material/Select";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

import "./App.css";
import {
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  FormHelperText,
  FormGroup,
  Checkbox,
} from "@mui/material";
import { useForm } from "react-hook-form";

const JobForm = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <div className="App__form">
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}> Job Form </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          id="outlined-basic"
          name="Job Title"
          label="Job Title"
          variant="outlined"
          fullWidth
          {...register("Job Title", { required: "Job Title is required." })}
          error={Boolean(errors.firstName)}
          helperText={errors.firstName?.message}
        />
        <TextField
          id="outlined-basic"
          label="company"
          variant="outlined"
          fullWidth
          name="lastName"
          {...register("lastName", { required: "company Name is required." })}
          error={Boolean(errors.lastName)}
          helperText={errors.lastName?.message}
        />

        <FormControl style={{marginBottom:"27px" }} fullWidth>
          <InputLabel id="demo-simple-select-label">Work Type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>

        <TextField
          id="outlined-basic"
          label="Location"
          variant="outlined"
          fullWidth
          name="lastName"
          {...register("lastName", { required: "company Name is required." })}
          error={Boolean(errors.lastName)}
          helperText={errors.lastName?.message}
        />

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Employement Type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>

        <FormControl style={{margin:"27px 0" }}  fullWidth>
          <InputLabel id="demo-simple-select-label">Level</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>

        <FormControl style={{marginBottom:"17px" }}  fullWidth>
          <InputLabel id="demo-simple-select-label">Salary</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>

        <TextareaAutosize
          aria-label="empty textarea"
          fullWidth
          style={{margin:"20px 0" ,width: "100% ", height: 200 }}
        />

        <Button
          variant="contained"
          color="primary"
          type="submit"
          className="btns"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};
export default JobForm;
