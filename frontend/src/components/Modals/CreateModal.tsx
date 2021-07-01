import React from 'react';
import axios from 'axios';
import { DropzoneDialog } from 'material-ui-dropzone';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Grid from '@material-ui/core/Grid';

import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Alert from '@material-ui/lab/Alert';

import { Data } from '../../common/interfaces';
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
};

const initialData = {
  name: '',
  comment: '',
  yumFactor: 1,
  imageUrl: '',
};

export default function CreateModal(props: Props) {
  const classes = useStyles();
  const [newImage, setNewImage] = React.useState<any>(undefined);
  const [submittingImage, setSubmittingImage] = React.useState(false);
  const [errors, setErrors] = React.useState<string[]>([]);
  const [data, setData] = React.useState<{
    id?: number;
    name: string;
    comment: string;
    imageUrl: string;
    yumFactor: number;
  }>(initialData);

  const handleBack = () => {
    props.setEnable(false);
  };

  const handleClose = () => {
    props.setEnable(false);
  };

  React.useEffect(() => {
    handleErrors();
  }, [data]);

  const handleSubmit = async () => {
    const newData = (data as Data);
    const params = new FormData();
    params.append('image', newImage);
    params.append('name', newData.name);
    params.append('yumFactor', newData.yumFactor.toString());
    params.append('comment', newData.comment);

    try {
      const res = await axios.post(`${API}cake/create`, params);
      const { data: resData } = res.data;
      setNewImage(false);
      props.setEnable(false);

      props.setCollection((prevState: any) => 
        [ resData, ...prevState ]);
    } catch (err) {
        setErrors(err.response.data.errors);
    }
  };

  const handleErrors = (image?: File) => {
    const errors: string[] = [];
    const input = (data as Data);

    if (
      JSON.stringify(data) === JSON.stringify(initialData)
      && undefined === newImage
    ) {
      return setErrors([]);
    }
    
    if (undefined === image && undefined === newImage) {
      errors.push("Missing image field");
    }

    if (!input.name) {
      errors.push("Missing name field.");
    } else if (3 > input.name.length) {
      errors.push("The name field must be at least 3 characters.");
    } else if (30 < input.name.length) {
      errors.push("The name field must not exceed 30 characters.");
    }

    if (!input.comment) {
      errors.push("Missing comment field.");
    } else if (3 > input.comment.length) {
      errors.push("The comment field must be at least 3 characters.");
    } else if (50 < input.comment.length) {
      errors.push("The comment field must not exceed 30 characters.");
    }

    const yumFactorConstraintErr = "The yumFactor field must be between 1 - 5 inclusive.";
    if (!input.yumFactor) {
      errors.push("Missing yumFactor field.");
    } else if (false === /^\d+$/.test(input.yumFactor.toString())) {
        errors.push("The yumFactor field must be an integer type.");
    } else if (1 > input.yumFactor) {
        errors.push(yumFactorConstraintErr);
    } else if (5 < input.yumFactor) {
        errors.push(yumFactorConstraintErr);
    }

    setErrors(prevState => [ ...errors ]);
  };
 
  const onChange = (event: any) => {
    const { name, value } = (event.target as HTMLInputElement);
    setData((prevState: any) => {
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

  const handleSaveImage = async (files: File[]) => {
    setNewImage(files[0]);
    setSubmittingImage(false);
    handleErrors(files[0]);
  };

  const cancelSaveImage = () => {
    setSubmittingImage(false);
    setNewImage(false);
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
            <h2 id="transition-modal-title">Add Cake</h2>
            <Grid container>
                <form>
                    <FormControl component="fieldset">
                        {
                          errors.length 
                            ? errors.map((error: string, key: number) => (
                                <Alert key={key} severity="error">
                                  {error}
                                </Alert> 
                              ))
                            : null
                        }
                        
                        <TextField 
                          id="standard-required" 
                          label="Name"
                          name="name"
                          value={(data as Data).name}
                          onChange={onChange}
                          style={{
                            width: 335,
                          }}
                        />
                        <TextField 
                          id="standard-required" 
                          label="Yum Factor"
                          name="yumFactor"
                          type="number"
                          value={(data as Data).yumFactor}
                          onChange={onChange}
                        />
                        <TextField 
                          id="standard-required" 
                          label="Comment"
                          name="comment"
                          value={(data as Data).comment}
                          onChange={onChange}
                        />
                        <br />
                        <Button
                          variant="contained" 
                          color={undefined !== newImage ? "primary" : "default"}
                          onClick={() => setSubmittingImage(true)}
                          style={{
                            marginTop: 15,
                            marginBottom: 15,
                          }}
                        >
                          Upload image
                        </Button>
                        <br />
                        <br />
                        <DropzoneDialog
                            open={submittingImage}
                            onSave={handleSaveImage}
                            acceptedFiles={['image/jpeg', 'image/png']}
                            showPreviews={true}
                            maxFileSize={5000000}
                            onClose={cancelSaveImage}
                        />
                        <br />
                        <Grid container>
                          <Grid item xs={10}>
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
                          <Grid item xs={2}>
                            <Grid container>
                              <Button 
                                variant="contained" 
                                color="primary"
                                onClick={handleSubmit}
                                disabled={0 < errors.length}
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
