import React from 'react'
import TextField from "@mui/material/TextField";
import "./mainPlay.css";

const Search = () => {
  return (
    <TextField
      id="search-bar"
      className="text search-text"
      variant="outlined"
      placeholder="Search any Song"
      size="small"
    />
  )
}

export default Search