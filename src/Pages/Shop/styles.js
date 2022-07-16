import { makeStyles } from '@material-ui/core/styles';
import { padding } from '@mui/system';

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
    padding: '80px 0',
  },
  shopSection:{
  },
  buttonHolder:{
    padding:'0 0 80px 0'
  },
  filterSection:{
    display:'flex',
    justifyContent:'space-between'
  },
  filerHolder:{
    display:"flex",
    alignItems:"center",
    gap:"10px",
    padding:"7.5px 6px"
  },
  filter:{
    background:'#ffffff',
    border:'1px solid rgba(196, 196, 196, 0.7)',
  },
  filterTitile:{
    fontFamily:"Inter",
    fontWeight:'400',
    fontSize:"16px",
    margin:'0'
  },
  filterIcon:{
    width:'16px',
    height:'16px'
  },
  filterChevron:{
    fontSize:'20px',
    color:'#000'
  },
  filterList:{
    display:'flex',
    justifyContent:'space-between',
    padding:'0',
    alignItems:'center',
    margin:'0',
  },
  filterLeft:{
    display:'flex',
    listStyleType:'none',
    alignItems:'center',
    gap:'35px',
    padding:'0',
    margin:'0'
  },
  size:{
    listStyleType:'none',
    padding:'0',
    margin:'0',
    display:'flex',
    gap:'10px',

  },
  sizeBtn:{
    border:'none',
    background:'none',
    padding:'0',
    alignSelf: 'flex-end'
  },
  sizeItem:{
    display:'flex',
    alignItems:'end',
  },
  photoList:{
    width:'90%',
    listStyleType:'none',
    margin:'20px auto'
  },
  photo_item:{
    display:'flex',
    width:"300px",
    margin:'20px 0'
  }
  

  
}));

export default useStyles;
 