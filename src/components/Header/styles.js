import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  headerHolder: {
    marginBottom: theme.spacing(2),
    background: '#ffffff',
    width: '100%',
    position: 'fixed',
    zIndex: '1000',
    top: '0',
    display: 'flex',
    borderBottom: '1px solid rgba(196, 196, 196, 0.7)',
    justifyContent: 'center',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    maxWidth: '1200px',
  },
  menuHolder:{
  },
  dropDown:{
    display:'flex',
    flexDirection:'column',
    listStyleType:'none',
    position:'absolute',
    padding:'60px 30px',
    background:'#ffffff',
    width: 'fit-content',
    margin:'0',
  },
  link:{
    margin:'7px 0',
    color:'black',
    fontSize:'18px',
    fontWeight:'700',
    transition: 'all 0.3s',
    '&:hover':{
      opacity:'0.7'
    }

  },
  logo: {
    padding: '23px',
    maxHeight: '70px',
    border: '1px solid rgba(196, 196, 196, 0.7)',
    borderBottom: 'none',
    textAlign: 'center',
  },
  logoText: {
    fontSize: '20px',
    fontWeight: '400',
    margin: '0',
    color:'#000000'
  },
}));

export default useStyles;
 