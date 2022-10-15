import { makeStyles } from "@mui/styles"

export default makeStyles((theme)=>({
  scroll: {
    overflowY: 'scroll',
  }
  ,
  imageLink: {
    display: 'flex',
    flexDirection:'row',
    alignItems: 'center',
    justifyContent : 'center',
    padding: '5% 5% 5% 5%',
  },
  sma:{
    [theme.breakpoints.down('sm')] : {
      color: theme.palette.mode === 'dark' && 'grey'
    }
  },
  image: {
    width: '70%',
  },
  links:{ 
    color: theme.palette.text.primary,
    textDecoration: 'none'
  },
  genreImage: {
    filter: theme.palette.mode === 'dark' && 'invert(1)',
  }
}));