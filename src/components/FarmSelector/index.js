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
  type,
  farmChoice,
  handleOnFarmChange,
  handleOnPeriodChange,
  handleOnSensorChange,
  handleOnChangeType,
  handleOnFarmChoice,
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
        <InputLabel htmlFor='period' shrink>
          Period
        </InputLabel>
        <NativeSelect
          value={periodValue}
          onChange={handleOnPeriodChange}
          inputProps={{
            name: 'period',
            id: 'period',
            'data-testid': 'select-period',
          }}
        >
          {period_type?.map((type, index) => {
            return (
              <option
                data-testid='period-selection'
                value={type?.type}
                key={`farm-${index}`}
              >
                {type?.name}
              </option>
            )
          })}
        </NativeSelect>
      </FormControl>
      {periodValue !== 'all' && (
        <FormControl>
          <InputLabel htmlFor='sensor' shrink>
            Sensor Type
          </InputLabel>
          <NativeSelect
            value={sensorValue}
            onChange={handleOnSensorChange}
            inputProps={{
              name: 'sensor',
              id: 'sensor',
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
      <AddData
        farms={farms}
        type={type}
        farmChoice={farmChoice}
        handleOnChangeType={handleOnChangeType}
        handleOnFarmChoice={handleOnFarmChoice}
      />
    </Box>
  )
}

export default FarmSelector
