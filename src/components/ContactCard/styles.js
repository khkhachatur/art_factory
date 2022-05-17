import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container:{
    },
    allContainer:{
        paddingLeft:'10px'
    },
    title:{
        fontWeight: '700',
        fontSize: '24px'
    },
    list:{
        listStyleType: 'none',
        maxWidth: '125px',
        padding:'0'
    },
    item:{
        fontSize: '16px',
        fontWeight: '400',
        lineHeight: '1px',
        display: 'flex', 
        justifyContent: 'space-between',
        '&:first-child': {
            lineHeight: '30px'
        }
    },
    contacts:{
        fontSize: '16px',
        fontWeight: '700'
    },
    contactItem:{
        fontSize: '16px',
        fontWeight: '400',
    },
    mail:{
        fontSize: '16px',
        fontWeight: '700'
    },
    maillink:{
        color:'#000000',
        fontSize: '16px',
        fontWeight: '400',
    },
    sociallist:{
        display:'flex',
        gap:'4px',
        listStyleType: 'none',
        padding:'0'
    },
    socialImg:{
        width:'80%',
        height:'80%'
    },
    socialFacebookImg:{
        width:'81%',
        height:'82%'
    }
}));

export default useStyles;
