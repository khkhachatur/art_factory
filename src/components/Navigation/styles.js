import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  nav: {
    display: 'flex',
    flexDirection: 'row',
    gap: '14px',
  },
  navText: {
    fontSize: '16px',
    fontWeight: '400',
  },
}));

export default useStyles;
