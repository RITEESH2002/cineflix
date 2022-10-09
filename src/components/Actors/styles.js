import { makeStyles } from '@mui/styles';

export default makeStyles((theme) =>({
    containerSpaceAround:{
      display: 'flex',
      justifyContent: 'space-around',
      margin: '10px 0 !important',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        flexWrap: 'wrap',
        padding:'0',
        // marginTop:'20px',
      },
    },
    poster: {
        borderRadius: '5px',
        boxShadow: '0.5em 1em 1em rgb(64, 64, 70)',
        width: '80%',
        '&:hover':{
            transform:'scale(1.01)',
            boxShadow: '0.7em 1.1em 1.1em rgb(64, 64, 69)',
        },
        [theme.breakpoints.down('md')]: {
          margin: '0 auto !important',
          width: '50%',
          display:'flex',
        },
        [theme.breakpoints.down('sm')]: {
          margin: '0 auto !important',
          width: '100%',
          height: '350px',
          marginBottom: '30px',
        },
      },  
      castImage: {
        width: '100%',
        maxWidth: '7em',
        height: '8em',
        objectFit: 'cover',
        borderRadius: '10px',
      },
      btns: {
        marginTop: '2rem',
        display: 'flex',
        justifyContent: 'space-around',
        [theme.breakpoints.down('sm')]: {
          flexDirection: 'column',
        }
      },
      
}));