
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
import top100Films from "../JobForm/data";
import countris from "../JobForm/countries";
import Button from "@mui/material/Button";


const MultiType = ({setReqirements,setKeyWords,reqirements,keywords}) => {
    const inputfocus = React.useRef(null);
    const inputfocuskeyword = React.useRef(null);
  

    const [single, setSingle] = React.useState("");
    const [keyword,setKeyWord]=React.useState("")

  
    console.log(keywords)
  
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
      setKeyWord("");
      inputfocuskeyword.current.focus();
    };

    const jobRequirementDelete = (key) =>{
      console.log(key)
      setReqirements(p=>{
            return p.filter((n,i)=>{
              console.log(n.id)
              return  i !== key
            })
        })
    }

    const skillDelete = (key) =>{
      console.log(key)
      setKeyWords(p=>{
            return p.filter((n,i)=>{
              console.log(n.id)
              return  i !== key
            })
        })
    }
  
    console.log(reqirements);
  return (
    <div>
      <Grid  item xs={12} sx={{marginBottom:"10px"}}>
        <InputLabel sx={{ marginBottom:"10px",fontWeight: "600" }}>
          Job Reqirements
        </InputLabel>
        <form onSubmit={handleReqirements}>
          <InputBase
            ref={inputfocus}
            onChange={(e) => setSingle(e.target.value)}
            value={single}
            endAdornment={
              <AddCircleOutlineIcon
                sx={{ color: "#4045db" }}
                onClick={handleReqirements}
              ></AddCircleOutlineIcon>
            }
            placeholder="Work Type"
            sx={{
                padding: "5px 12px",
                borderRadius: "5px",
                backgroundColor: "transperent",
                border: "1px solid #ccc",
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
              reqirements.map((item,i) => {
                return<Chip sx={{marginBottom:"10px"}} key={i} id={i} label={item} variant="outlined" onDelete={(e) => jobRequirementDelete(i)} />;
              })}
          </Stack>
        </Grid>
      </Grid>

      <Grid sx={{ my: 1 }} item xs={12}>
        <InputLabel sx={{ marginBottom:"10px", fontWeight: "600" }}>
          Key Words
        </InputLabel>
        <form onSubmit={handleKeyWords}>
          <InputBase
            ref={inputfocuskeyword}
            onChange={(e) => setKeyWord(e.target.value)}
            value={keyword}
            endAdornment={
              <AddCircleOutlineIcon
                sx={{ color: "#4045db" }}
                onClick={handleKeyWords}
              ></AddCircleOutlineIcon>
            }
            placeholder="Work Type"
            sx={{
                
                padding: "5px 12px",
                borderRadius: "5px",
                backgroundColor: "transperent",
                border: "1px solid #ccc",
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
              keywords.map((item,i) => {
                return <Chip sx={{marginBottom:"10px"}} key={i} id={i} label={item} variant="outlined" onDelete={(e) => skillDelete(i)}/>;
              })}
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
};

export default MultiType;
