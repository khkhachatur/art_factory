import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
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
  buttonContainer: {
    background: '#ffffff',
    padding: '30px',
    position: 'absolute',
    bottom: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
  },
  button: {
    padding: '17px 20px',
    cursor: 'pointer',
    outline: 'none',
    background: 'none',
    border: '1px solid #000000',
    transition: 'all 0.3s',
    '&:hover': {
      transform: 'scale(1.01)',
      opacity: '0.7',
    },
  },
  aboutUsLink: {
    textDecoration: 'none',
    fontFamily: 'Montserrat',
    fontSize: '24px',
    fontWeight: '600',
    color: '#000000',
  },

  linksContainer: {
    paddingTop: '80px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },

  linksHolder: {
    padding:'0 40px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '20px',
  },

  linksBlock: {
    padding: '60px 120px',
    background: 'none',
    outline: 'none',
    border: '1px solid rgba(0, 0, 0, 0.5)',
    cursor: 'pointer',
    transition: 'all 0.3s',
    '&:hover': {
      transform: 'scale(1.01)',
      opacity: '0.7',
    },
    // '&:last-child': {
    //   gridColumn: '1 / -1',
    // },
  },
  linksText: {
  fontSize: '36px',
    fontWeight: '400',
    textDecoration: 'none',
    color: '#000000',
  },
  
  commingSoonSection: {
    paddingTop: '80px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  shopContainer:{
    width: '100%',
  },
  shopSection:{
    display: 'grid',
    gap: '80px',
    gridTemplateColumns: '1fr 1fr 1fr',
    padding:'0 65px',
  },
  buttonHolder:{
    display:'flex',
    justifyContent:'center',
  },
  subscribeSection: {
    width: '100%',
    margin: '0 auto',
    marginTop: '80px',
    border: '1px solid #000000',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
  },
  subscribeImageBlock: {
    width: '100%',
    height: '300px',
  },
  subscribeDescriptionBlock: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
    padding: '0 30px',
  },
  subscribeTitle: {
    fontSize: '24px',
    fontWeight: '500',
  },
  subscribeDescription: {
    fontSize: '20px',
    fontWeight: '400',
  },
  subscribeButton: {
    background: '#003566',
    border: 'none',
    padding: '13px 45px',
    color: '#ffffff',
    fontSize: '16px',
    fontWeight: '700',
    cursor: 'pointer',
    transition: 'all 0.3s',
    '&:hover': {
      opacity: '0.9',
    },
  },
  contactHolder:{
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: '80px',
  },
}));

export default useStyles;
 