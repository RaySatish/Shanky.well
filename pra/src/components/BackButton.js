import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const BackButton = ({ to }) => {
  return (
    <Button component={Link} to={to} startIcon={<ArrowBackIcon />}>
      Back
    </Button>
  );
};

export default BackButton;
