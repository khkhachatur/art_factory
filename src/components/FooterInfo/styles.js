import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  footerHolder: {
    background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), #003566;',
    width: '100%',
    // position: 'absolute',
    // bottom: '0',
    // left:'0',
    display: 'flex',
  },
  footer: {
    padding:'0 150px'
  },
  info:{
    color:'#ffffff'
  },
  title:{
    fontSize:'14px',
    fontWeight:'700',
  },
  list:{
    listStyleType: 'none', 
    padding:'0',
    fontSize:'14px', 
    fontWeight:'500',
    '&:last-child': {
      marginTop: '10px',
      color:'red'
  }
  },
  listImg:{
    display:'flex',
    listStyleType: 'none',
    padding:'0',
    gap:'10px'

  },
}));

export default useStyles;
