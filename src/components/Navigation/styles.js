import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  nav: {
    display: 'flex',
    flexDirection: 'row',
    gap: '14px',
  },
  navText: {
    color:'#000000',
    fontSize: '16px',
    fontFamily:'Montserrat',
    fontWeight: '400',
    transition:'0.3s',
    '&:hover':{
      opacity:'0.7',

    },
  },
}));

export default useStyles;
 