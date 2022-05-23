import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    subscribeSection: {
        width: '100%',
        margin: '0 auto',
        marginTop: '80px',
        border: '1px solid #000000',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
      },
      subscribeImageBlock: {
        width: '100%',
        height: '300px',
        padding:'40px',
      },
      subscribeDescriptionBlock: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100%',
        padding: '0 30px',
      },
      subscribeTitle: {
        fontSize: '24px',
        fontWeight: '500',
      },
      subscribeDescription: {
        fontSize: '20px', 
        fontWeight: '400',
      },
      subscribeButton: {
        background: '#003566',
        border: 'none',
        padding: '13px 45px',
        color: '#ffffff',
        fontSize: '16px',
        fontWeight: '700',
        cursor: 'pointer',
        transition: 'all 0.3s',
        '&:hover': {
          opacity: '0.9',
        }
    },
}));

export default useStyles;
