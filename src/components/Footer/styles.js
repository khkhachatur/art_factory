import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  footerHolder: {
    background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), #003566;',
    width: '100%',
    display: 'flex',
  },
  footer: {
    padding:'0 250px',
    display:'flex',
    gap:'100px'
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
      paddingTop:'10px',
    },
  },
  listImg:{
    display:'flex',
    listStyleType: 'none',
    padding:'0',
    gap:'10px'

  },
  mooreInfo:{
    display:'flex',
    height:'50px',
    bottom:'0',
    left:'0'
  },
  footerButton:{
    background:'none',
    color:'#ffffff',
    fontSize:'14px',
    fontWeight:'700',
    coursore:'pointer',
    padding:'3px 7px',
    border:'1px solid #ffffff',
    transition: 'all 0.3s',
    '&:hover': {
      transform: 'scale(1.01)',
    }
  },
}));

export default useStyles;
