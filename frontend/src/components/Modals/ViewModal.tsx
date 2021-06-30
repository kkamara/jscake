import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import { Data } from '../../extra/interfaces';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }),
);

type Props = {
  setEnable: Function;
  enable: boolean;
  data: Data;
};

export default function ViewModal(props: Props) {
  const classes = useStyles();

  const handleClose = () => {
    props.setEnable(false);
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={props.enable}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade 
          in={props.enable}
          style={{
            width: 400,
          }}
        >
          <div className={classes.paper}>
            <img src={props.data.imageUrl} height={100} />
            <h2 id="transition-modal-title">{props.data.name}</h2>
            <ul id="transition-modal-description">
              <li>{props.data.yumFactor} rating</li>
              <li>{props.data.comment}</li>
            </ul>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}