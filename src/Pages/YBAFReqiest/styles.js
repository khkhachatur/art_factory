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
    paddingBottom:'150px',
    paddingTop: '70px',
  },
  mainInfo:{
    display: 'grid',
    gridTemplateColumns:'1fr 1fr',
    gap:'170px',
  },
  list:{
    listStyleType:'none',
    padding:'0',
    display:'flex',
    flexDirection:'column'
  },
  discription:{
    padding:'0',
    
  },
  input:{
    width:'100%',
    height:'60px',
    borderRadius:'4px',
    border: '1px solid #949494',
  },
  workList:{
    display:'grid',
    gridTemplateColumns:'1fr 1fr 1fr 1fr',
    listStyleType:'none',
    padding:'0',
    gap:'24px',
    width:'80%'
  },
  text:{
    fontFamily:'Montserrat',
    fontWeight:'400',
    fontSize:'18px',
  },
  img:{
    display:'flex',
    justifyContent:'center',
    padding:'50px 90px',
    cursor: 'pointer',
    transition: 'all 0.3s',
    '&:hover': {
      transform: 'scale(1.01)',
      opacity: '0.7',
  },
},
btn:{
  color:'#ffffff',
  background:'#0E1934',
  padding:'15px 60px',
  border:'none',
  fontFamily: 'Inter',
  fontWeight: '700',
  fontSize: '16px',
},

}));

export default useStyles;
