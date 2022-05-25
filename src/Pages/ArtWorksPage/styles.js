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

}));

export default useStyles;
