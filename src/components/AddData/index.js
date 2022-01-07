import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  Modal,
  NativeSelect,
  TextField,
  Typography,
} from '@mui/material'
import React, { useState } from 'react'
import { selector_choice } from '../../constant'
import styles from './styles.module.css'

const AddData = ({
  farms,
  type,
  farmChoice,
  handleOnChangeType,
  handleOnFarmChoice,
}) => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div className={styles.btn_container}>
      <Button onClick={handleOpen}>add data</Button>
      <Modal open={open} onClose={handleClose}>
        <Box className={styles.popup_container}>
          <Typography variant='h5' component='h2'>
            ADD DATA
          </Typography>
          <Box sx={{ mt: 4 }}>
            <Box className={styles.form_container}>
              <FormControl>
                <InputLabel htmlFor='' shrink>
                  Choose
                </InputLabel>
                <NativeSelect
                  value={type}
                  onChange={handleOnChangeType}
                  inputProps={{
                    name: 'select-type-data',
                    id: 'add-data',
                  }}
                >
                  {selector_choice?.map((choice) => (
                    <option value={choice?.type} key={`choice-${choice?.type}`}>
                      {choice?.name}
                    </option>
                  ))}
                </NativeSelect>
              </FormControl>
            </Box>
            {type === 'current' ? (
              <Box className={styles.form_container}>
                <FormControl className={styles.form_container}>
                  <InputLabel htmlFor='' shrink>
                    Farm
                  </InputLabel>
                  <NativeSelect
                    value={farmChoice}
                    onChange={handleOnFarmChoice}
                    inputProps={{
                      name: 'farm-choice',
                      id: 'farm-choice-selector',
                    }}
                  >
                    {farms?.map((farm, index) => {
                      return (
                        <option
                          value={farm.farm_id}
                          key={`farm-choice-${index}`}
                        >
                          {farm?.name}
                        </option>
                      )
                    })}
                  </NativeSelect>
                </FormControl>
                <Box className={styles.drag_area}>
                  <CloudUploadIcon fontSize='large' />
                  <Typography>Drag and Drop to Upload Data File</Typography>
                  <Typography>OR</Typography>
                  <Button className={styles.btn_upload}>
                    Browse Data File
                  </Button>
                </Box>
                <Box className={styles.wrapper_add}>
                  <Button onClick={handleClose}>Add</Button>
                </Box>
              </Box>
            ) : (
              <Box>
                <FormControl style={{ width: '100%' }}>
                  <TextField
                    fullWidth
                    required
                    label='Name of the farm'
                    className={styles.input}
                  />
                  <TextField
                    fullWidth
                    required
                    label='Location'
                    className={styles.input}
                  />
                  <TextField
                    fullWidth
                    required
                    label='Latitude'
                    className={styles.input}
                  />
                  <TextField
                    fullWidth
                    required
                    label='Longitude'
                    className={styles.input}
                  />
                </FormControl>

                <Box className={styles.drag_area}>
                  <CloudUploadIcon fontSize='large' />
                  <Typography>Drag and Drop to Upload Data File</Typography>
                  <Typography>OR</Typography>
                  <Button className={styles.btn_upload}>
                    Browse Data File
                  </Button>
                </Box>
                <Box className={styles.wrapper_add}>
                  <Button onClick={handleClose}>Add</Button>
                </Box>
              </Box>
            )}
          </Box>
        </Box>
      </Modal>
    </div>
  )
}

export default AddData
