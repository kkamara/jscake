import React from 'react';
import axios from 'axios';
import { DropzoneDialog } from 'material-ui-dropzone';
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
import TextField from '@material-ui/core/TextField';
import Alert from '@material-ui/lab/Alert';
import FormGroup from '@material-ui/core/FormGroup';

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
  setData: Function;
  data: Data|undefined;
};

export default function EditModal(props: Props) {
  const classes = useStyles();
  const [submittingChange, setSubmittingChange] = React.useState(false);
  const [uploadingImage, setUploadingImage] = React.useState(false);
  const [newImage, setNewImage] = React.useState<any>(undefined);
  const [submittingImage, setSubmittingImage] = React.useState(false);

  if (undefined === props.data) {
    props.setEnable(false);
  }

  const handleBack = () => {
    props.setEnable(false);
  };

  const handleClose = () => {
    props.setEnable(false);
  };

  const handleUploadingImageChoice = (event: React.ChangeEvent<HTMLInputElement>) => {
    const val = (event.target as HTMLInputElement).value;
    switch(val) {
        case 'true':
            setSubmittingImage(true);
            setUploadingImage(true);
            break;
        case 'false':
            setNewImage(false);
            setUploadingImage(false);
            setSubmittingImage(false);
            break;
    }
  };

  const handleSubmit = async () => {
    if (true === submittingChange) {
      return;
      const params = {};
      const res = await axios.patch(`${API}/cake/${(props.data as Data).id}`, params);
      if (200 === res.status) {
        props.setCollection((prevState: any) => {
          setSubmittingChange(false);
          props.setEnable(false);
          // implement
        });
      } else {
        throw new Error("Something went wrong");
      }
    } else {
      props.setEnable(false);
    }
  };
 
  const onChange = (event: any) => {
    const { name, value } = (event.target as HTMLInputElement);
    props.setData((prevState: any) => {
      if ('yumFactor' === name) {
        return {
          ...prevState,
          [name]: Number.parseInt(value),
        };
      }
      return {
        ...prevState,
        [name]: value,
      };
    });
  };
 
  const handleSave = (files: File[]) => {
    setNewImage(files[0]);
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
            <h2 id="transition-modal-title">Edit {(props.data as Data).name}</h2>
            <ul id="transition-modal-description">
              <li>{(props.data as Data).yumFactor} rating</li>
              <li>{(props.data as Data).comment}</li>
            </ul>
            <Grid container>
                <form>
                    <FormControl component="fieldset">
                        <Alert severity="error">This is an error alert — check it out!</Alert>
                        <TextField 
                          id="standard-required" 
                          name="name"
                          value={(props.data as Data).name}
                          onChange={onChange}
                        />
                        <TextField 
                          id="standard-required" 
                          name="yumFactor"
                          type="number"
                          value={(props.data as Data).yumFactor}
                          onChange={onChange}
                        />
                        <TextField 
                          id="standard-required" 
                          name="comment"
                          value={(props.data as Data).comment}
                          onChange={onChange}
                        />
                        <FormGroup>
                          <FormLabel component="legend">
                            Upload new image?
                          </FormLabel>
                          <RadioGroup 
                            aria-label="uploading image" 
                            name="uploadingImage" 
                            value={uploadingImage} 
                            onChange={handleUploadingImageChoice}
                          >
                              <FormControlLabel 
                                value="true" 
                                control={<Radio checked={uploadingImage} />} 
                                label="Yes" 
                              />
                              <FormControlLabel 
                                value="false" 
                                control={<Radio checked={!uploadingImage} />} 
                                label="No" 
                              />
                          </RadioGroup>
                        </FormGroup>
                        {
                          uploadingImage ? (
                            <>
                              <DropzoneDialog
                                  open={submittingImage}
                                  onSave={handleSave}
                                  acceptedFiles={['image/jpeg', 'image/png']}
                                  showPreviews={true}
                                  maxFileSize={5000000}
                                  onClose={() => setSubmittingImage(false)}
                              />
                            </>
                          ) : null
                        }
                        <br />
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
