import {
  Box,
  Button,
  FormControl,
  InputLabel,
  Modal,
  NativeSelect,
  Typography,
} from '@mui/material'
import React, { useState } from 'react'
import { selector_choice } from '../../constant'
import styles from './styles.module.css'

const AddData = ({ farms }) => {
  const [open, setOpen] = useState(false)
  const [type, setType] = useState(false)
  const [farmChoice, setFarmChoice] = useState('')

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const handleOnChangeType = (e) => {
    setType(e.target.value)
  }
  const handleOnFarmChoice = (e) => {
    setFarmChoice(e.target.value)
  }

  return (
    <div className={styles.btn_container}>
      <Button onClick={handleOpen}>add data</Button>
      <Modal open={open} onClose={handleClose}>
        <Box className={styles.popup_container}>
          <Typography variant='h6' component='h2'>
            Text in a modal
          </Typography>
          <Box sx={{ mt: 4 }}>
            <FormControl>
              <InputLabel htmlFor='' shrink>
                Choose
              </InputLabel>
              <NativeSelect
                value={type}
                onChange={handleOnChangeType}
                inputProps={{
                  name: 'add',
                  id: 'add-data',
                }}
              >
                {selector_choice?.map((choice) => (
                  <option key={`choice-${type}`} value={choice.type}>
                    {choice.name}
                  </option>
                ))}
                )
              </NativeSelect>
            </FormControl>
            {type === 'current' && (
              <Box>
                <FormControl>
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
              </Box>
            )}
          </Box>
        </Box>
      </Modal>
    </div>
  )
}

export default AddData
