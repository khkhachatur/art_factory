import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: '0 auto',
    marginTop: '30px',
    background: 'none',
    cursor: 'pointer',
    border: '1px solid #003566',
    padding: '7px 12px',
  },
  link: {
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: '700',
    color: '#003566',
  },
}));

export default useStyles;
