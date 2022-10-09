import React from "react";
import { useSelector } from "react-redux";
import { userSelector } from "../../features/auth";
import Lottie from "react-lottie";
import animationData from "../../lottie/user.json";
import { Box, Typography, Button } from "@mui/material";
import { ExitToApp } from "@mui/icons-material";

const Profile = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };
  const favouriteMovies = []
  const { user } = useSelector(userSelector);
  console.log(user);
  return (
    <>

    <Box
      display="flex"
      flexDirection="column"
      textAlign="center"
      alignItems="center"
    >
      <Lottie options={defaultOptions} height={100} width={100} />
      <br></br>
      <div>
        <Typography
          variant="h6"
          fontFamily={"Helvetica Neue"}
          gutterBottom
        >{`UserName : ${user.username}`}</Typography>
        <Typography
          variant="h6"
          fontFamily={"Helvetica Neue"}
          gutterBottom
        >{`UserID : ${user.id}`}</Typography>
      </div>

      <Button
        variant="outlined"
        sx={{ width: 200, padding: 1, margin: 2 }}
        color="inherit"
        onClick={logout}
      >
        Logout &nbsp; <ExitToApp />
      </Button>
    </Box>
    <br></br>
    {!favouriteMovies.length ?
      ( 
      
      <Typography variant = "h5" fontFamily={"Helvetica Neue"}
      gutterBottom>
        Add Favourites or WatchList Some Movies !
      </Typography>) : (
        <Box>
          FAVOURITE MOVIES
        </Box>
      )
    }
    </>
  );
};

export default Profile;
