import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  modalBkg:{
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
    padding:'60px 50px'
  },
  close:{
    display:'flex',
    justifyContent:'end'
  },
  title: {
    display:'flex',
    justifyContent:'center',
    fontSize:'24px',
    fontWeight:'300'
  },
  text: {
    fontSize:'14px',
    fontWeight:'400'
  },
}));

export default useStyles;