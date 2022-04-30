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
  nav: {
    display: 'flex',
    flexDirection: 'row',
    gap: '14px',
  },
  navText: {
    fontSize: '16px',
    fontWeight: '400',
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
