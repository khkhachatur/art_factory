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
  filter:{
    background:'#ffffff',
    border:'1px solid rgba(196, 196, 196, 0.7)',
    padding:'7.5px 15px'
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
  option:{
    fontFamily:'Open Sans',
    fontSize:'20px',
    fontWeight:'400'
  },
  sortBy:{
    width:'185px',
    height:'40px',
    padding:'4px 8px',
    fontFamily:'Open Sans',
    fontSize:'20px',
    fontWeight:'400',
    border:'1px solid rgba(196, 196, 196, 0.7)',
  },
  Price:{
    listStyleType:'none',
    padding:'0',
    margin:'0',
    display:'flex',
    gap:'20px'
  },
  optionPrimer:{
    color:'rgba(0, 0, 0, 0.5)',
    fontFamily:'Open Sans',
    fontSize:'20px',
    fontWeight:'400'
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
}));

export default useStyles;
 