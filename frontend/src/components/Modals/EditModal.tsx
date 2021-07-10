import React from 'react'
import axios from 'axios'
import { DropzoneDialog } from 'material-ui-dropzone'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import Grid from '@material-ui/core/Grid'

import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Alert from '@material-ui/lab/Alert'
import FormGroup from '@material-ui/core/FormGroup'

import { Data } from '../../common/interfaces'
import { API } from '../../constants'

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
  setCollection: Function
  setEnable: Function
  enable: boolean
  setData: Function
  data: Data|undefined
}

export default function EditModal(props: Props) {
  const classes = useStyles()
  const [uploadingImage, setUploadingImage] = React.useState(false)
  const [newImage, setNewImage] = React.useState<any>(undefined)
  const [submittingImage, setSubmittingImage] = React.useState(false)
  const [errors, setErrors] = React.useState<string[]>([])
  const [editObject, setEditObject] = React.useState<Data|undefined>(props.data)

  if (undefined === props.data) {
    props.setEnable(false)
  }

  const handleBack = () => {
    props.setEnable(false)
  }

  const handleClose = () => {
    props.setEnable(false)
  }

  React.useEffect(() => {
    setEditObject(props.data)
  }, [])

  React.useEffect(() => {
    handleErrors()
  }, [editObject])

  const handleUploadingImageChoice = (event: React.ChangeEvent<HTMLInputElement>) => {
    const val = (event.target as HTMLInputElement).value
    switch(val) {
        case 'true':
            setSubmittingImage(true)
            setUploadingImage(true)
            break
        case 'false':
            setNewImage(false)
            setUploadingImage(false)
            setSubmittingImage(false)
            break
    }
  }

  const handleSubmit = async () => {
    const data = (editObject as Data)
    const params = new FormData()
    if (undefined !== newImage) {
      params.append('image', newImage)
    }
    params.append('name', data.name)
    params.append('yumFactor', data.yumFactor.toString())
    params.append('comment', data.comment)

    try {
      const res = await axios.patch(`${API}cake/${data.id}`, params)
      const { data: newData } = res.data
      setNewImage(false)
      props.setEnable(false)

      props.setData(newData)

      props.setCollection((prevState: any) => {
        const newState: Data[] = [ ...prevState ]
        for (const key in newState) {
          const { id } = newState[key]
          if (id === data.id) {
            newState[key] = newData
          }
        }

        return newState
      })
    } catch (err) {
        setErrors(err.response.data.errors)
    }
  }

  const handleErrors = () => {
    const errors: string[] = []
    const data = (editObject as Data)

    if (3 > data.name.length) {
      errors.push("The name field must be at least 3 characters.")
    } else if (30 < data.name.length) {
      errors.push("The name field must not exceed 30 characters.")
    }

    if (3 > data.comment.length) {
      errors.push("The comment field must be at least 3 characters.")
    } else if (50 < data.comment.length) {
      errors.push("The comment field must not exceed 30 characters.")
    }

    const yumFactorConstraintErr = "The yumFactor field must be between 1 - 5 inclusive."
    if (false === /^\d+$/.test(data.yumFactor.toString())) {
        errors.push("The yumFactor field must be an integer type.")
    } else if (1 > data.yumFactor) {
        errors.push(yumFactorConstraintErr)
    } else if (5 < data.yumFactor) {
        errors.push(yumFactorConstraintErr)
    }

    setErrors(prevState => [ ...errors ])
  }
 
  const onChange = (event: any) => {
    const { name, value } = (event.target as HTMLInputElement)
    setEditObject((prevState: any) => {
      if ('yumFactor' === name) {
        return {
          ...prevState,
          [name]: Number.parseInt(value),
        }
      }
      return {
        ...prevState,
        [name]: value,
      }
    })
  }
 
  const handleSaveImage = (files: File[]) => {
    setNewImage(files[0])
    setSubmittingImage(false)
  }
 
  const cancelSaveImage = () => {
    setSubmittingImage(false)
    setNewImage(false)
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
        data-testid='edit-modal'
      >
        <Fade 
          in={props.enable}
          style={{
            width: 400,
          }}
        >
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Edit {(editObject as Data).name}</h2>
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
                          name="name"
                          value={(editObject as Data).name}
                          onChange={onChange}
                          style={{
                            width: 335,
                          }}
                        />
                        <TextField 
                          id="standard-required" 
                          name="yumFactor"
                          type="number"
                          value={(editObject as Data).yumFactor}
                          onChange={onChange}
                        />
                        <TextField 
                          id="standard-required" 
                          name="comment"
                          value={(editObject as Data).comment}
                          onChange={onChange}
                        />
                        <br />
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
                                  onSave={handleSaveImage}
                                  acceptedFiles={['image/jpeg', 'image/png']}
                                  showPreviews={true}
                                  maxFileSize={5000000}
                                  onClose={cancelSaveImage}
                              />
                            </>
                          ) : null
                        }
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
  )
}
