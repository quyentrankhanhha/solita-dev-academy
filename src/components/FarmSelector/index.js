import { Box, FormControl, InputLabel, NativeSelect } from '@mui/material'
import React from 'react'
import { period_type, sensor_type } from '../../constant'
import AddData from '../AddData'
import styles from './styles.module.css'

const FarmSelector = ({
  farms,
  farmValue,
  periodValue,
  sensorValue,
  handleOnFarmChange,
  handleOnPeriodChange,
  handleOnSensorChange,
}) => {
  return (
    <Box className={styles.selector_wrapper}>
      <FormControl>
        <InputLabel htmlFor='' shrink>
          Farm
        </InputLabel>
        <NativeSelect
          value={farmValue}
          onChange={handleOnFarmChange}
          inputProps={{
            name: 'farm',
            id: 'farm-selector',
          }}
        >
          {farms?.map((farm, index) => {
            return (
              <option value={farm.farm_id} key={`farm-${index}`}>
                {farm?.name}
              </option>
            )
          })}
        </NativeSelect>
      </FormControl>
      <FormControl className={styles.selector}>
        <InputLabel htmlFor='' shrink>
          Period
        </InputLabel>
        <NativeSelect
          value={periodValue}
          onChange={handleOnPeriodChange}
          inputProps={{
            name: 'period',
            id: 'period-selector',
          }}
        >
          {period_type?.map((type, index) => {
            return (
              <option value={type.type} key={`farm-${index}`}>
                {type?.name}
              </option>
            )
          })}
        </NativeSelect>
      </FormControl>
      {periodValue !== 'all' && (
        <FormControl>
          <InputLabel htmlFor='' shrink>
            Sensor Type
          </InputLabel>
          <NativeSelect
            value={sensorValue}
            onChange={handleOnSensorChange}
            inputProps={{
              name: 'sensor',
              id: 'sensor-selector',
            }}
          >
            {sensor_type?.map((type, index) => {
              return (
                <option value={type.type} key={`farm-${index}`}>
                  {type.name}
                </option>
              )
            })}
          </NativeSelect>
        </FormControl>
      )}
      <AddData farms={farms} />
    </Box>
  )
}

export default FarmSelector
