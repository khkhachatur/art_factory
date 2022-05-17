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
  topContainer:{
    width: '100%',
  },
  topSection:{
    display: 'grid',
    gridTemplateColumns:'1fr 1fr',
    gap:'120px',

  },
  topList:{
    listStyleType:'none',
    padding:'0',
    margin:'0',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    
  },
  aboutContainer:{
    paddingTop:'80px'
  },
  aboutText:{
    fontSize:'18px',
    fontWeight:'400'
  },
  partContainer:{
    width: '100%',
    paddingTop:'80px',
  },
  partSection:{
    display: 'grid',
    gap: '40px',
    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr'
  },
  contactSection: {
    width: '100%',
    margin: '0 auto',
    marginTop: '80px',
    border: '1px solid #000000',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
  },
  weekly: {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
    marginBottom: '80px',
  },
  monthly: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: '20px',
    marginBottom: '30px',
  },
  buttonHolder: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginBottom:'80px'
  },
}));

export default useStyles;
