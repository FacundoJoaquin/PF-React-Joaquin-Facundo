import React, { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import './ButtonDrop.css'

const ButtonDrop = ({ data }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const generaciones = [...new Set(data.map((item) => item.generacion))];

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        disableRipple 
      >
        <p className="generaciones">Generaciones</p>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {generaciones.map((generation) => (
          <Link to={`/category/${generation}`} key={generation}>
            <MenuItem onClick={handleClose}>
              <div className="generaciones">{generation}</div>
            </MenuItem>
          </Link>
        ))}
      </Menu>
    </div>
  );
};

export default ButtonDrop;
