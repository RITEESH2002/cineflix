import React from "react";
import { Typography, Box } from "@mui/material";

import useStyles from "./styles";
import Movie from "../Movie/Movie";

const RatedCards = ({ title, data }) => {
  const classes = useStyles();

  return (
    <Box>
      <Typography
        variant="h4"
        gutterBottom
        marginLeft="20px"
        fontWeight="bolder"
        fontFamily={"Helvetica Neue"}
      >
        {data?.results?.length > 0 ? title : ''}
      </Typography>
      <Box display="flex" flexWrap="wrap" className={classes.container}>
        {data?.results.map((movie, i) => (
          <Movie key={movie.id} movie={movie} i={i} />
        ))}
      </Box>
    </Box>
  );
};

export default RatedCards;
