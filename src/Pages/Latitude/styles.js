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
  mainImage: {
    height: 'calc(95vh - 70px)',
    width: '100%',
    position: 'relative',
  },
  buttonsContainer: {
    position: 'absolute',
    bottom: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    padding: '30px',
    display: 'flex',
    gap: '40px'
    
  },
  buttonContainer:{
    background: '#ffffff',
    padding: '20px',
  },
  button: {
    padding: '17px 20px',
    cursor: 'pointer',
    outline: 'none',
    background: 'transparent',
    border: '1px solid #000000',
    transition: 'all 0.3s',
    '&:hover': {
      transform: 'scale(1.01)',
      opacity: '0.7',
    },
  },
  primaryButton: {
    background: '#003566',

  },
  buttonPrimary:{
    border: '1px solid #ffffff',
  },
  aboutUsLink: {
    textDecoration: 'none',
    fontSize: '24px',
    fontWeight: '600',
    color: '#000000',
  },
  aboutUsLinkPrimary:{
    color:'#ffffff',
    textDecoration: 'none',
    fontSize: '24px',
    fontWeight: '600',
  },
  event:{
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: '20px',
    marginBottom: '80px',
  },
  galleryList:{
    listStyleType:'none',
    padding:'0',
    display: 'flex',
  },
  pastEvents:{
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: '20px',
    marginBottom: '80px',
  },
  artistsBlock: {
    display: 'grid',
    gap: '40px',
    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr'
  },
  buttonHolder:{
    display:'flex',
    justifyContent:'center',
  },
}));

export default useStyles;
