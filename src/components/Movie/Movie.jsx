import React from "react";
import { Typography, Grid, Grow, Tooltip, Rating } from "@mui/material";
import { Link } from "react-router-dom";

import useStyles from "./styles";
import { Toolbar } from "material-ui";

const Movie = ({ movie, index }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} lg={3} xl={2.1} className={classes.movie}>
      <Grow in key={index} timeout={(index + 1) * 200}>
        <Link className={classes.links} to={`/movie/${movie.id}`}>
          <img
            alt={movie.title}
            className={classes.image}
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : "https://www.fillmurray.com/200/300"
            }
          ></img>
          <Typography
            fontFamily={"Helvetica Neue"}
            className={classes.title}
            variant="h5"
          >
            {movie.title}
          </Typography>
          <Tooltip
            disableTouchListener
            title={`${movie.vote_average} out of 10`}
            placement="right"
          >
            <div>
              <Rating readOnly value={movie.vote_average / 2} precision={0.1} />
            </div>
          </Tooltip>
        </Link>
      </Grow>
    </Grid>
  );
};

export default Movie;
