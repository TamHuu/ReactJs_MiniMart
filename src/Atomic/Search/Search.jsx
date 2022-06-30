import React from "react";
import TextField from "@material-ui/core/TextField";
import { InputAdornment } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

export default function Search(props) {
  return (
    <TextField
      placeholder="Tìm kiếm..."
      fullWidth
      style={{
        marginLeft: "171px",
        maxWidth: "256px",
        // background: "#fff",
        borderRadius: "4px",
      }}
      // color="secondary"
      type="text"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      multiline
      variant="outlined"
      value={props.search}
      onChange={(e) => props.onSearch(e.target.value)}
    />
  );
}
