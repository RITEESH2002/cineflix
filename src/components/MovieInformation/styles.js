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
      genresContainer: {
        margin: '10px 0 !imaportant',
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
      },
      genreImage: {
        filter: theme.palette.mode === 'dark' && 'invert(1)',
        marginRight: '10px',
      },
      links: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textDecoration: 'none',
        [theme.breakpoints.down('sm')]: {
          padding: '0.5rem 1rem',
        },
      },
      castImage: {
        width: '100%',
        maxWidth: '7em',
        height: '8em',
        objectFit: 'cover',
        borderRadius: '10px',
      },
      buttonsContainer: {
        display: "flex",
        justifyContent: "space-between",
        width: '100%',
        [theme.breakpoints.down('sm')]: {
          flexDirection: 'column',
        }
      },
      join : {
        [theme.breakpoints.down('md')]: {
          flexDirection: 'column',
          padding:'5px',
          borderRadius: '5px',
          marginBottom:'5px',
          border:'1px solid blue',
          align:'center' 
        // boxShadow: '0.1em 0.1em 0.1em rgb(6, 1, 0)'
        }
      },
      modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      video: {
        width: '60%',
        height: '50%',
        [theme.breakpoints.down('md')]: {
          width: '90%',
          height: '40%',
          flexDirection: 'column',
        },
        [theme.breakpoints.down('sm')]: {
          width: '90%',
          height: '40%',
          flexDirection: 'column',
        },
      }
}));