import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import classNames from 'classnames';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '800px',
  bgcolor: '#ffffff',
  border: '1px solid #000',
  boxShadow: 24,
  p: 5,
};

const CustomModal = ({ title, text }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>About Us</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <p className={classNames.title} id="modal-modal-title" variant="h6" component="h2">
            {title}
          </p>
          <p className={classNames.text} id="modal-modal-description" sx={{ mt: 2 }}>
            {text}
          </p>
        </Box>
      </Modal>
    </div>
  );
}

export default CustomModal;

