import { makeStyles } from "@mui/styles"

//to use theme we need to wrap the entire application with it in the index.js
export default makeStyles((theme)=>({
 movie: {
  padding: '10px',
  overflowY: 'scroll',
    scrollBehavior: 'smooth',
    '&::-webkit-scrollbar': {
      display: 'none' ,
    },
 },
 links: {
  alignItems: "center",
  fontWeight: "bolder",
  [theme.breakpoints.up('xs')]: {
    display: 'flex',
    flexDirection: "column",
  },
  textDecoration: 'none',
  '&:hover': {
    cursor: 'pointer',
  } 
 },
 image: {
   height: '330px',
   marginBottom: '15px',
   borderRadius: '10px',
   boxShadow: '3px 3px 3px 3px rgba(0, 0, 0, 0.2)',
   '&:hover': {
     borderRadius: '20px',
     transform: 'scale(1.04)',
    boxShadow: '8px 8px 8px 8px rgba(0, 0, 0, 0.2)',
  }
 },
 title: {
  color: theme.palette.text.primary,
  textOverflow: 'ellipsis',
  width: '230px',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  marginTop: '10px',
  marginBottom: '0px',
  textAlign: 'center',
  '&:hover': {
    transform: 'scale(1.10)',
  }
 }
}));