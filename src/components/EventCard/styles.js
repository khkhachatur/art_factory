import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: (props) => ({
    width: props.width,
    height: props.height,
    margin: '0 auto',
    position: 'relative',
  }),
  descriptionContainer: {
    position: 'absolute',
    bottom: '0',
    left: '0',
    width: '355px',
    height: 'fit-content',
    background: '#ffffff',
    border: '1px solid rgba(0, 0, 0, 0.5)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '6px 12px',
  },
  dateBlock: {
    width: '100%',
  },
  date: {
    fontSize: '18px',
    fontWeight: '400',
    margin: '0',
  },
  place: {
    fontSize: '12px',
    fontWeight: '400',
  },
  nameBlock: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: '18px',
    fontWeight: '400',
  },
  arrowIcon: {
    width: '24px',
    height: '24px',
    border: 'none',
    cursor: 'pointer',
  },
}));

export default useStyles;
