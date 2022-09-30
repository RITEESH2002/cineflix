import { makeStyles } from "@mui/styles"

//to use theme we need to wrap the entire application with it in the index.js
export default makeStyles((theme)=>({
  moviesContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    overflowY: 'scroll',
    scrollBehavior: 'smooth',
    '&::-webkit-scrollbar': {
      display: 'none' ,
    },
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    }
  }
}));