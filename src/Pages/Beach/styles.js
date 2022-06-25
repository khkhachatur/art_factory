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
  
  qrSection:{
    position: 'absolute',
    left: '3%',
    top: '30px',
  },
  qrText:{
    display:'flex',
    color:'#ffffff',
    fontSize:'16px',
    fontWeight:'700'
  },
  qrBox:{
    width:'20%'
  },
  monthly: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: '20px',
    marginBottom: '30px',
  }, 
  events:{
    paddingTop:'80px'
  },
  galleryList:{
    listStyleType:'none',
    padding:'80px  0',
    display: 'flex',
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

  opContainer:{
    padding: '80px 0',
    width:'100%',
  },
  opSection:{
    display:'flex',
    justifyContent:'space-between',
  },
  opBlock:{
    display:'flex',
    gap:'10px',
    padding:'10px',
    border: '1px solid rgba(0, 0, 0, 0.5)',   
  },
  opDescription:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent:'center',
    alignItems: 'center',
  },
  opList:{
    margin:'0',
    padding:'0',
    marginBottom:'55px',

  },
  opTitle:{
    fontSize:'24px',
    fontWeight:'300',
    margin:'0',
  },
  opItem:{
    fontSize:'16px',
    fontWeight:'400',
    marginLeft:'40px',
    '&:first-child': {
      listStyleType:'none',
      margin:'15px 0',
      paddingLeft:'-40px',
      display:'flex',
      justifyContent:'flex-start'
    },
  },
  opButton: {
    background: '#003566',
    border: 'none',
    padding: '8px 16px',
    color: '#ffffff',
    fontSize: '16px',
    fontWeight: '700',
    cursor: 'pointer',
    transition: 'all 0.3s',
    '&:hover': {
      opacity: '0.9',

    }
},
contactsItem_2:{
  fontSize:'14px',
  fontWeight:'400',
},
disc:{
  fontSize:'18px',
  fontWeight:'400',
  margin:'16px 0 50px 0',
},
}));

export default useStyles;
