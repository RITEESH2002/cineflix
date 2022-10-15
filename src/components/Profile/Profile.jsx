import React from "react";
import { useSelector } from "react-redux";
import { userSelector } from "../../features/auth";
import Lottie from "react-lottie";
import animationData from "../../lottie/user.json";
import { Box, Typography, Button } from "@mui/material";
import { ExitToApp } from "@mui/icons-material";
import { useGetListQuery } from "../../services/TMDB";
import RatedCards from "../RatedCards/RatedCards";
import { useEffect } from "react";

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
  
  const { user } = useSelector(userSelector);
  console.log(user);
  
  const { data: favoriteMovies, refetch: refetchFavorites } = useGetListQuery({
    listName: "favorite/movies",
    accountId: user.id,
    sessionId: localStorage.getItem("session_id"),
    page: 1,
  });
  const { data: watchlistMovies, refetch: refetchWatchListed } = useGetListQuery({
    listName: "watchlist/movies",
    accountId: user.id,
    sessionId: localStorage.getItem("session_id"),
    page: 1,
  });
  
  useEffect(() => {

    refetchFavorites();
    refetchWatchListed();

  }, [])  

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
          fontWeight="bolder"
        >{`UserName : ${user.username}`}</Typography>
        <Typography
          variant="h6"
          fontFamily={"Helvetica Neue"}
          gutterBottom
          fontWeight="bolder"
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
    {
      (!favoriteMovies?.results?.length && !watchlistMovies?.results?.length) ? ( 
      <Typography variant = "h5" fontFamily={"Helvetica Neue"} fontWeight="bolder"
      gutterBottom>
        Add Favourites or WatchList Some Movies !
      </Typography>
      ) : (
        <Box>
          <RatedCards title="Favorite Movies" data={favoriteMovies}/>
          <RatedCards title="Watchlist Movies" data={watchlistMovies}/>
        </Box>
      )
    }
    </>
  );
};

export default Profile;