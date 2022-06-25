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
  artist:{
    display: 'grid', 
    gridTemplateColumns:'1fr 3fr 1.1fr',  
    alignItems: 'center',
  },
  ArtistImg:{
    width:'200px',
    height:'200px',
    borderRadius:'100px'
  },
  info:{
    listStyleType:'none',
    padding:'0',
    margin:'0'
  },
  name:{
    fontFamily:'Montserrat',
    fontWeight:'500',
    fontSize:'18px'
  },
  position:{
    fontFamily:'Montserrat',
    fontWeight:'400',
    fontSize:'16px'
  },
  country:{
    fontFamily:'Montserrat',
    fontWeight:'300',
    fontSize:'14px'
  },
  contactList:{
    display:'flex',
    flexDirection:'column',
    listStyleType:'none',
    padding:'0',
    margin:'0',
    alignItems:'end'
  },
  contactItem:{
    fontFamily:'Montserrat',
    fontWeight:'400',
    fontSize:'16px'
  },
  discription:{
    display: 'grid',
    gap:'15px',
    gridTemplateColumns: '1fr 1fr',
    paddingTop:'60px'
  },
  discriptionImages:{
    position: 'relative',
    height: 'calc(95vh-80px)',
    maxWidth:'100%',
  },
  descrImg: {
    '&:first-child': {
      width: '70%',
      height: '100%',
    },
    '&:nth-child(2)': {
      height: '40%',
      top: '0',
      right: '0',
      width: '28%'
    },
    '&:nth-child(3)': {
      height: '58%',
      bottom: '0',
      right: '0',
      width: '28%'
    },
    position: 'absolute',
  },
  discriptionList:{
    listStyleType:'none',
    padding:'0',
  },
  discriptionText:{
    padding:'0',
    margin:'0',

    '&:first-child':{
    },
  },
  discriptionSubText:{
    fontSize:'16px',
    fontFamily:'Montserrat',
    fontWeight:'400',
  },
  discriptionSubText_02:{
    fontSize:'14px',
    fontWeight:'400',
    fontFamily:'Open Sans'
  },
  articles:{
    paddingTop:'80px',
  },
  artList:{
    listStyleType:'none',
    display:'grid',
    padding:'0',
  },
  artLink:{
    color:'#000000',
    paddingBottom:'15px',
    transition:'0.3s',
    '&:hover':{
      opacity:'0.7'
    }
  },
 
  collHolder:{
    display:'grid',
    gridTemplateColumns:'1fr 1fr',
    gap:'20px',

  },
  subCollHolder:{
    display:'grid',
    position: 'relative',
    gridTemplateColumns:'1fr 4fr',
    gap:'10px',
    padding:'10px',
    border: '1px solid rgba(0, 0, 0, 0.5)',
  },
  collDescription: {
    position: 'absolute',
    bottom: '35%',
    left: '0',
    width: '100%',
    height: 'fit-content',
    background: 'rgba(241, 232, 232, 0.7)',
    padding: '6px 12px',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'column',
  },
  title:{
    fontSize:'18px',
    fontFamily:'Montserrat',
    fontWeight:'700',
    color: '#0C163D',
    textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    margin:'0'
  },
  year:{
    fontSize:'18px',
    fontFamily:'Montserrat',
    fontWeight:'400',
    color: '#0C163D',
    margin:'0'

  },
  workHolder:{
    display:'grid',
    gridTemplateColumns:'1fr 1fr 1fr 1fr',
    gap:'24px',
  },
  buttonHolder:{
    paddingBottom:'80px'
  },
  galleryStyle:{
    
  },

}));

export default useStyles;
