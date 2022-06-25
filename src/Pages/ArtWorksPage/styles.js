import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  section: {
    maxWidth: '1200px',
    height: '100%',
    width: '100%',
    paddingTop: '70px',
  },
  topSection:{
    display:'flex',
    justifyContent:'space-between',
  },
  slider:{
    width:'800px',
    maxWidth:'100%',
    border:'1px solid rgba(196, 196, 196, 0.7)'
  },
  about:{
    padding:'80px 0',
    width:'800px',
    maxWidth:'100%',
  },
  list:{
    listStyleType:'none',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
  },
  title:{
    fontSize:'24px',
    fontWeight:'300',
  },
  item:{
    fontSize:'18px',
    fontWeight:'400',
  },
  workHolder:{
    display:'grid',
    gridTemplateColumns:'1fr 1fr 1fr 1fr'
  },
  other:{    
    padding:'80px 0',
  },
  otherHolder:{
    display:'grid',
    gridTemplateColumns:'1fr 1fr',
  },
  buttonHolder:{
    display:'flex',
    paddingBottom:'80px',
    justifyContent:'center',
    
  },
  modal:{
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width:'700px',
    maxWidth:'100%',
    background:'#ffffff', 
    padding:'45px 40px'
  },
  modalSection:{
    display:'grid',
    gridTemplateColumns:'1fr 1fr',
    gap:'30px'
  },
  modalList:{
    listStyleType:'none',
    padding:'0',
    display:'flex',
    flexDirection:'column',
    gap:'20px'
  },
  title1:{
    margin:'0',
    fontFamily:'Inter',
    fontWeight:'400',
    fontSize:'14px'
  },
  text:{
    fontFamily:'Montserrat',
    fontWeight:'400',
    fontSize:'18px'
  },
  input:{
    width:'100%',
    height:'60px',
    border: '1px solid #949494',
    borderRadius: '4px',
  },
  btn:{
    background:'#0E1934',
    border:'none',
    color:'white',
    fontFamily:'Inter',
    fontSize:'16px',
    fontWeight:'700',
    padding:'15px 65px'
  },
  close:{
    display:'flex',
    justifyContent:'end',
    '&:hover':{
      cursor:'pointer'
    },
  },
  

}));

export default useStyles;
