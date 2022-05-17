import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    holder:{
        display:'flex',
        justifyContent:'center',
    },
    img:{
        display: 'flex',
        position: 'relative',
    },
    descriptionContainer:{
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
    list:{
        listStyleType:'none',
        padding:'0',
        margin:'0',
        gap:'5px',
        display:'flex',
      },
    name:{
        textShadow: '0px 4px 4px #949494',
        fontWeight: '700',
        fontSize: '13px',
        color:'#0C163D'
    },
    item:{
      fontWeight: '600',
      fontSize: '12px',
      color:'#0C163D',
    },
    price:{
      fontWeight: '600',
      fontSize: '12px',
      color:'#0C163D',
      position:'absolute',
      right:'15px',
      bottom:'5px',
    }
}));

export default useStyles;
