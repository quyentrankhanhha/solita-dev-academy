import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { getFarms, getStatsFarm } from './api'
import './App.css'
import FarmSelector from './components/FarmSelector'
import Map from './components/Map'
import Table from './components/Table'

function App() {
  const [farms, setFarms] = useState([])
  const [selectedFarmId, setSelectedFarmId] = useState('')
  const [selectedPeriod, setSelectedPeriod] = useState('')
  const [selectedSensor, setSelectedSensor] = useState('tamperature')
  const [report, setReport] = useState([])

  useEffect(() => {
    getFarms()
      .then((res) => {
        setFarms(res.data)
        setSelectedFarmId('1')
        setSelectedPeriod('all')
      })
      .catch((err) => console.log(err))
  }, [])

  const handleOnFarmChange = (e) => {
    setSelectedFarmId(e.target.farmValue)
  }

  const handleOnPeriodChange = (e) => {
    setSelectedPeriod(e.target.value)
  }

  const handleOnSensorChange = (e) => {
    setSelectedSensor(e.target.value)
  }

  useEffect(() => {
    if (selectedFarmId) {
      const selectedFarm = farms.find(
        (farm) => farm?.farm_id === selectedFarmId
      )

      getStatsFarm(selectedFarm?.farm_id)?.then((res) => {
        setReport(res.data.measurements)
      })
    }
  }, [farms, selectedFarmId])

  return (
    <div className='App'>
      <Box>
        <FarmSelector
          farms={farms}
          handleOnFarmChange={handleOnFarmChange}
          handleOnPeriodChange={handleOnPeriodChange}
          handleOnSensorChange={handleOnSensorChange}
          farmValue={selectedFarmId}
          periodValue={selectedPeriod}
          sensorValue={selectedSensor}
        ></FarmSelector>
      </Box>
      <Table farm={report} />
      <Map />
    </div>
  )
}

export default App
