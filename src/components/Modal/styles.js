import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  modalBkg:{
    position:'fixed',
    zIndex: '1',
    left:'0',
    top:'0',
    overflow:'auto',
    hight:'100%',
    width:'100%',
    background:'linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), rgba(0, 53, 102, 0.6);'
  },
  modalContainer:{ 
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width:'700px',
    maxWidth:'100%',
    background:'#ffffff', 
    padding:'30px 50px'
  },
  close:{
    display:'grid',
    gridTemplateColumns:'15fr 1fr',
    '&:hover':{
      cursor:'pointer'
    },
  },
  title: {
    display:'flex',
    justifyContent:'center',
    fontSize:'24px',
    fontWeight:'300',
    margin:'0',
  },
  text: {
    fontSize:'14px',
    paddingTop:'30px',
    fontWeight:'400',
    margin:'0',
    fontFamily:'Montserrat',
  },
}));


export default useStyles;