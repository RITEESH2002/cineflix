import React, {useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useGetActorDetailsQuery, useGetMoviesByActorIdQuery } from '../../services/TMDB'
import {
  Typography,
  Modal,
  Button,
  ButtonGroup,
  Grid,
  Box,
  CircularProgress,
  useMediaQuery,
  Rating,
} from "@mui/material";
import {
  Movie as MovieIcon,
  Theaters,
  PlusOne,
  Favorite,
  FavoriteBorderOutlined,
  Remove,
  ArrowBack,
  Language,
} from "@mui/icons-material";
import { Link } from 'react-router-dom';
import useStyles from './styles'
import MovieList from '../MovieList/MovieList';

const Actors = () => {
  const [page, setPage] = useState(1)
  const { id } = useParams();
  const { data, isFetching, error } = useGetActorDetailsQuery(id);
  const {data: movieData, isFetching: isMovieFetching} = useGetMoviesByActorIdQuery({id, page});
  const navigate = useNavigate();
  const classes = useStyles();
  
  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <CircularProgress size="6rem" />
      </Box>
    );
  }
  if (error) {
    return (
      <Box
        flexDirection="column"
        display="flex"
        justifyContent="center"
      >
        <Typography variant="h5" fontFamily={"Helvetica Neue"} gutterBottom>
          {" "}
          Something Has Gone Wrong.
        </Typography>
        <br></br>
        <Link to="/">Go Back</Link>
      </Box>
    );
  }
  if (isMovieFetching) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <CircularProgress size="6rem" />
      </Box>
    );
  }

  console.log(movieData)
  return (
    <Grid  container className={classes.containerSpaceAround}>
      <Grid item sm={12} lg={4} style={{ marginBottom: "30px" }}>
        <img
          className={classes.poster}
          src={`https://image.tmdb.org/t/p/w500/${data?.profile_path}`}
          alt={data?.name}
        />
      </Grid>
      <Grid item container direction="column" lg={7}>
      <br></br>
        <Typography variant="h4"
          fontWeight="bolder"
          fontFamily={"Helvetica Neue"}
          align="center"
          gutterBottom>
          {data?.name}
        </Typography>
        <Typography fontWeight="bolder"
          
          fontStyle="italic"
          fontFamily={"Helvetica Neue"}
          align="center"
          gutterBottom>
         🎂 BORN : {data?.birthday ? data.birthday : 'Sorry! Couldnt Find Birthday'}
        </Typography>
        <br></br>
        <Typography fontWeight="bolder" variant="h6" gutterBottom style={{ margintop: '10px'}}>
            ABOUT
        </Typography>
        <Typography fontStyle="italic" style={{ marginBottom: '2rem'}}>
            {data?.biography ? data.biography : 'Sorry! Couldnt Find Biography'}
        </Typography>
        <Box className={classes.btns}>
            <Button variant="contained" color="primary" target="_blank" href={`https://www.imdb.com/name/${data?.imdb_id}`}>IMDB</Button>
            <Button startIcon={<ArrowBack />} onClick={() => navigate(-1)} color="primary">Back</Button>
          </Box>
      </Grid>
      <Box marginTop="5rem" width="100%" fontWeight="bold" fontSize="26px" textAlign="center">
          <Typography variant="h4" fontWeight="bolder"
          fontFamily={"Helvetica Neue"} gutterBottom align="center">
               📽️ Movies
          </Typography>
          {(movieData?.results?.length > 0) 
          ? <MovieList movies={movieData} numberOfMovies={12}/>
          : <><br></br><Box>Sorry, Nothing Was Found.</Box></>}
      </Box>
      
    </Grid>
  )
}

export default Actors
