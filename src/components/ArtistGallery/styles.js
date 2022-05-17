import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  artistImg:{
    borderRadius:'200px',
    width:'40%',
    
    height:'50%',
  },
  artistCard:{
    display:'flex',   
    justifyContent: 'center',
    alignItems: 'center',
    gap:'20px'

  },
  artist:{
    display: 'flex',
    display:'flex',   
    justifyContent: 'center',
    alignItems: 'center',
    gap:'15px',
  },
  discription:{
    listStyleType:'none',
    display: 'block',
    padding:'0',
    margin:'0',
  },
  name:{
    fontSize:'18px',
    fontWeight:'500'
  },
  position:{
    fontSize:'14px',
    fontWeight:'400'
  },
  country:{
    fontSize:'14px',
    fontWeight:'300'
  },
  artistGallery:{
    listStyleType:'none',
    display: 'flex',
    padding:'0',
    gap:'16px'
  },
  artistGalleryItem:{
    width:'100%',
  }
  
}));

export default useStyles;
