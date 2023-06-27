import React, { useEffect } from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  ListItemIcon,
  Box,
  CircularProgress,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/styles";
import useStyles from "./styles";
import { useGetGenresQuery } from "../../services/TMDB";
import genreIcons from "../../assets/genres";
import { useDispatch, useSelector } from "react-redux";
import { selectGenreOrCategory } from "../../features/currentGenreOrCategory";
import Lottie from "react-lottie";
import animationData from '../../lottie/binge.json'


const categories = [
  { label: "Popular", value: "popular" },
  { label: "Top Rated", value: "top_rated" },
  { label: "Upcoming", value: "upcoming" },
];
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  }
}

// const blueLogo =
//   "https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png";
// const redLogo =
//   "https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png";
const Sidebar = ({ setMobileOpen }) => {
  const { genreIdOrCategoryName } = useSelector((state)=> state.currentGenreOrCategory);
  const { data, isFetching } = useGetGenresQuery();
  const dispatch = useDispatch(); //send actions from component to redux

  useEffect(()=>{
    setMobileOpen(false)
  }, [genreIdOrCategoryName])

  const theme = useTheme();
  const classes = useStyles();
  return (
    <>
      <div className={classes.scroll}>

      <Link to="/" className={classes.imageLink}>
        {/* <img
          className={classes.image}
          src={theme.palette.mode === "light" ? blueLogo : redLogo}
          alt="Filmpire logo"
        /> */}
        <Typography  fontSize="29px" fontFamily="sans-serif" className={classes.sma} marginLeft='10px' fontWeight="bolder">CINEFLIX</Typography>
        <Lottie options={defaultOptions}  height={70} width={100} />
      </Link>
      <Divider />
      <List>
        <ListSubheader>Categories</ListSubheader>
        {categories.map(({ label, value }) => (
          <Link key={value} className={classes.links} to="/">
            <ListItem onClick={() => {dispatch(selectGenreOrCategory(label))}} button>
              <ListItemIcon>
                <img
                  src={genreIcons[label.toLowerCase()]}
                  className={classes.genreImage}
                  height={30}
                />
              </ListItemIcon>
              <ListItemText primary={label} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        <ListSubheader>Genres</ListSubheader>
        {isFetching ? (
          <Box display="flex" justifyContent="center">
            <CircularProgress size="4rem" />
          </Box>
        ) : (
          data.genres.map(({ name, id }) => (
            <Link key={id} className={classes.links} to="/">
              <ListItem onClick={() => {dispatch(selectGenreOrCategory(id))}} button>
                <ListItemIcon>
                  <img
                    src={genreIcons[name.toLowerCase()]}
                    className={classes.genreImage}
                    height={30}
                  />
                </ListItemIcon>
                <ListItemText primary={name} />
              </ListItem>
            </Link>
          ))
        )}
      </List>
{/*       <Typography variant='h6' sx={{marginBottom:'16px',marginLeft:'16px', color:'gray',}}>
            <a target="_blank" style={{textDecoration:'none', color:'gray', fontSize:'17px'}}>
              Copyright © RDPAI
            </a>
      </Typography> */}
      </div>
    </>
  );
};

export default Sidebar;
