import React from 'react';
import axios from 'axios';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Grid from '@material-ui/core/Grid';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';

import { Data } from '../../common/interfaces';
import * as partials from '../../common/partials';
import { API } from '../../constants';

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
  setCollection: Function;
  setEnable: Function;
  enable: boolean;
  data: Data|undefined;
};

export default function DeleteModal(props: Props) {
  const classes = useStyles();
  const [deleteResource, setDeleteResource] = React.useState(false);

  if (undefined === props.data) {
    props.setEnable(false);
  }

  const handleBack = () => {
    props.setEnable(false);
  };

  const handleClose = () => {
    props.setEnable(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const val = (event.target as HTMLInputElement).value;
    switch(val) {
        case 'true':
            setDeleteResource(true);
            break;
        case 'false':
            setDeleteResource(false);
            break;
    }
  };

  const handleSubmit = async () => {
    console.log('in submit', deleteResource);
    if (true === deleteResource) {
      const res = await axios.delete(`${API}/cake/${(props.data as Data).id}`);
      if (200 === res.status) {
        props.setCollection((prevState: any) => {
          props.setEnable(false);
          return prevState
            .filter(({ id }: Data) => id !== (props.data as Data).id);
        });
      } else {
        throw new Error("Something went wrong");
      }
    } else {
      props.setEnable(false);
    }
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
            <partials.renderImage url={(props.data as Data).imageUrl} />
            <h2 id="transition-modal-title">Delete {(props.data as Data).name}</h2>
            <ul id="transition-modal-description">
              <li>{(props.data as Data).yumFactor} rating</li>
              <li>{(props.data as Data).comment}</li>
            </ul>
            <Grid container>
                <form>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">
                          Are you sure you want to delete this?
                        </FormLabel>
                        <RadioGroup 
                          aria-label="delete" 
                          name="delete" 
                          value={deleteResource} 
                          onChange={handleChange}
                        >
                            <FormControlLabel 
                              value="true" 
                              control={<Radio checked={deleteResource} />} 
                              label="Yes" 
                            />
                            <FormControlLabel 
                              value="false" 
                              control={<Radio checked={!deleteResource} />} 
                              label="No" 
                            />
                        </RadioGroup>
                        <Grid container>
                          <Grid item xs={11}>
                            <Grid container> 
                              <Button 
                                variant="contained" 
                                color="default"
                                onClick={handleBack}
                              >
                                Back
                              </Button>
                            </Grid>
                          </Grid>
                          <Grid item xs={1}>
                            <Grid container>
                              <Button 
                                variant="contained" 
                                color="primary"
                                onClick={handleSubmit}
                              >
                                Submit
                              </Button>
                            </Grid>
                          </Grid>
                        </Grid>
                    </FormControl>
                </form>
            </Grid>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};
