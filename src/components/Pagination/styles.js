import { makeStyles } from "@mui/styles"

//to use theme we need to wrap the entire application with it in the index.js
export default makeStyles((theme)=>({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    margin: '30px 2px',
  },
  pageNumber: {
    margin: '0 20px !important',
    color: theme.palette.text.primary,
  }
}));