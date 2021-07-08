import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import Grid from '@material-ui/core/Grid'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'

import { Data } from '../../common/interfaces'
import * as styles from '../../common/styles'
import * as partials from '../../common/partials'

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
)

type Props = {
  setShowEditModal: Function
  setShowDeleteModal: Function
  setEnable: Function
  enable: boolean
  data: Data|undefined
}

export default function ViewModal(props: Props) {
  const classes = useStyles()

  if (undefined === props.data) {
    props.setEnable(false)
  }

  const handleClose = () => {
    props.setEnable(false)
  }

  const handleUpdate = () => {
    props.setShowEditModal(true)
  }

  const handleDelete = () => {
    props.setShowDeleteModal(true)
  }

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
            <partials.renderImage url={(props.data as Data).imageUrl} />
            <h2 id="transition-modal-title">{(props.data as Data).name}</h2>
            <ul id="transition-modal-description">
              <li>{(props.data as Data).yumFactor} rating</li>
              <li>{(props.data as Data).comment}</li>
            </ul>
            <Grid container>
              <Grid item xs={11}>
                <Grid container>
                  <EditIcon
                    style={styles.button}
                    onClick={handleUpdate}
                    fontSize="large"
                    color='action'
                  />      
                </Grid>
              </Grid>
              <Grid item xs={1}>
                <Grid container>
                  <DeleteIcon
                    style={styles.button}
                    onClick={handleDelete}
                    fontSize="large"
                    color='secondary'
                  />
                </Grid>
              </Grid>
            </Grid>
          </div>
        </Fade>
      </Modal>
    </div>
  )
}
