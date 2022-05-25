import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    height:"340px",
    display: 'flex',
    position: 'relative',
    '&:hover':{
      descriptionContainer:{
        visibility:'visible', 
      }
    }
  },
  descriptionContainer: {
    position: 'absolute',
    bottom: '10px',
    left: '0',
    width: '100%',
    height: 'fit-content',
    background: 'rgba(241, 232, 232, 0.7)',
    display: 'flex',
    flexDirection: 'column',
    padding: '6px 12px',
    // visibility:'hidden',
  },
  list:{
    listStyleType:'none',
    padding:'0',
    margin:'0',
    gap:'5px',
    display:'flex',
  },
  name:{
      margin: '0', 
      textShadow: '0px 4px 4px #949494',
      fontFamily: 'Montserrat',
      fontWeight: '700',
      fontSize: '13px',
      color:'#0C163D'
  },
  item:{
    margin: '0',
    fontWeight: '600',
    fontSize: '12px',
    fontFamily: 'Montserrat',
    color:'#0C163D',
  },
  price:{
    margin: '0',
    fontWeight: '600',
    fontSize: '12px',
    color:'#0C163D',
    position:'absolute',
    fontFamily: 'Montserrat',
    right:'15px',
    bottom:'5px',
  }
  
}));

export default useStyles;
