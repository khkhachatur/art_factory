import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    height:'200px',
    display: 'flex',
    position: 'relative',
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
  }, 
  name:{
    margin: '0',
    textShadow: '0px 4px 4px #949494',
      fontWeight: '600',
      fontSize: '12px',
      color:'#0C163D'
  },
  position:{
    margin: '0',
    fontWeight: '400',
    fontSize: '12px',
    color:'#0C163D'
  },
  country:{
    margin: '0',
    fontWeight: '300',
    fontSize: '12px',
    color:'#0C163D'
  }
  
}));

export default useStyles;
