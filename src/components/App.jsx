import React,{useRef } from "react";
import { CssBaseline } from "@mui/material";
import { Route, Routes, Router } from "react-router-dom";
import MovieInformation from "./MovieInformation/MovieInformation";
import Actors from "./Actors/Actors";
import Profile from "./Profile/Profile";
import Movies from "./Movies/Movies";
import NavBar from "./NavBar/NavBar";
import useStyles from "../styles";
import useAlan from "./Alan";

function App() {
  const classes = useStyles();
  const alanBtnContainer = useRef();
  
  useAlan();

  return (
      <div className={classes.root}>
        <CssBaseline />
        <NavBar />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Routes>
            <Route exact path="/actors/:id" element={<Actors />} />
            <Route exact path="/approved" element={<Profile />} />
            <Route exact path="/movie/:id" element={<MovieInformation />} />
            <Route exact path="/" element={<Movies />} />
            <Route exact path="/profile/:id" element={<Profile />} />
          </Routes>
        </main>
        <div ref={alanBtnContainer} />
      </div>
  );
}

export default App;
