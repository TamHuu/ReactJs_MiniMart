import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import ListAltIcon from "@material-ui/icons/ListAlt";
import React from "react";
import FreeBreakfastIcon from "@material-ui/icons/FreeBreakfast";

const MenuItem = ({ text, index }) => {
  return (
    <ListItem button key={text}>
      <ListItemIcon>
        {index % 2 === 0 ? <ListAltIcon /> : <FreeBreakfastIcon />}
      </ListItemIcon>
      <ListItemText primary={text} />
    </ListItem>
  );
};

export default MenuItem;
