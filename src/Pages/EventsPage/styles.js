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
  description:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    gap:'30px'
  },
  dateTimeContainer:{
    display:'flex',
    gap:'20px'
  },
  dateTime:{
    listStyleType:'none',
    display:'flex',
    flexDirection:'column',
    padding:'0',
    margin:'0'
  },
  strong:{
    fontSize:'18px',
    fontWeight:'600',
    fontFamily:'Montserrat',
  },
  text:{
    fontSize:'18px',
    fontWeight:'400',
    fontFamily:'Montserrat',
  },
  location:{
    listStyleType:'none',
    display:'flex',
    padding:'0',
    margin:'0',
    gap:'20px'
  },
  contactSection: {
    width: '100%',
    margin: '0 auto',
    marginTop: '40px',
    border: '1px solid #000000',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
  },
  left:{
    display:'flex',
    flexDirection:'column',
    gap:'30px'
  },
  ImageBlock: {
    width: '100%',
    height: '300px',
  },
  DescriptionBlock:{
    listStyleType:'none',
    display:'flex',
    flexDirection:'column',
    gap:'10px',
    padding:'0',
    margin:'0'
  },
  timeBlock:{
    listStyleType:'none',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    gap:'10px',
    padding:'0',
    margin:'0'
  },
  sociallist:{
    listStyleType:'none',
    display:'flex',
    gap:'12px',
    padding:'0',
    margin:'0',
  
  },
  socialImg:{
    width:'30px',
  },
  socialFacebookImg:{
    width:'31px',
  },
  contactsBlock: {
    display: 'flex',
    justifyContent:'space-between',
    gap:'30px',
    padding:'20px 25px'
  },
  contactsTitle:{
    fontSize:'18px',
    fontWeight:'500',
    paddingBottom:'20px',
    margin:'0',
  },
  contactsItem:{
    fontSize:'16px',
    fontWeight:'400',
    margin:'0',
  },
  aboutContainer:{
    fontFamily:'Montserrat',
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
