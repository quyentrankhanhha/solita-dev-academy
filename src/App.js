import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { getFarms, getStatsFarm, getStatsFarmMonthly } from './api'
import './App.css'
import LineChart from './components/Charts/LineChart'
import FarmSelector from './components/FarmSelector'
import Map from './components/Map'
import Table from './components/Table'
import { getFormattedDate } from './utils/DateTimeUtils'

function App() {
  const [farms, setFarms] = useState([])
  const [selectedFarmId, setSelectedFarmId] = useState('')
  const [selectedPeriod, setSelectedPeriod] = useState('all')
  const [selectedSensor, setSelectedSensor] = useState('none')
  const [report, setReport] = useState([])
  const [temData, setTemData] = useState([])

  const [phData, setPhData] = useState([])
  const [rainfallData, setRainfallData] = useState([])

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
    setSelectedFarmId(e.target.value)
  }

  const handleOnPeriodChange = (e) => {
    setSelectedPeriod(e.target.value)
  }

  const handleOnSensorChange = (e) => {
    setSelectedSensor(e.target.value)
  }

  useEffect(() => {
    let selectedFarm
    if (selectedFarmId && selectedPeriod === 'all') {
      selectedFarm = farms?.find((farm) => farm?.farm_id === selectedFarmId)
      getStatsFarm(selectedFarm?.farm_id)?.then((res) => {
        const farmData = res.data.measurements.map((ele) => ({
          ...ele,
          datetime: getFormattedDate(
            new Date(ele.datetime),
            'DD.MM.YYYY HH:mm:ss'
          ),
          test: new Date(ele.datetime),
        }))
        setPhData(farmData?.filter((item) => item?.sensor_type === 'ph'))
        setTemData(
          farmData?.filter((item) => item?.sensor_type === 'temperature')
        )
        setRainfallData(
          farmData?.filter((item) => item?.sensor_type === 'rainfall')
        )
        setReport(farmData)
      })
    } else if (
      selectedFarmId &&
      selectedPeriod !== 'all' &&
      selectedSensor !== 'none'
    ) {
      selectedFarm = farms?.find((farm) => farm?.farm_id === selectedFarmId)
      getStatsFarmMonthly(selectedFarm?.farm_id, selectedSensor)?.then(
        (res) => {
          const sortMonthYear = (a, b) => {
            if (a.year !== b.year) {
              return a.year - b.year
            } else {
              return a.month - b.month
            }
          }
          setReport(res.data.stats.sort(sortMonthYear))
        }
      )
    }
  }, [farms, selectedFarmId, selectedPeriod, selectedSensor])

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
      <Grid container direction='row' justifyContent='space-between'>
        <Grid item xs>
          <Map farms={farms} handleOnFarmChange={handleOnFarmChange} />
        </Grid>
        <Grid item xs>
          <Table farm={report} selectedPeriod={selectedPeriod} />
        </Grid>
      </Grid>
      <Grid container justifyContent='center'>
        {selectedPeriod === 'all' ? (
          <Grid container>
            <Grid item xs={12} className='chart_container'>
              <LineChart report={phData} title='pH Data' />
            </Grid>
            <Grid item xs={12} className='chart_container'>
              <LineChart
                report={temData}
                title='Temperature Data'
                value='Temperature (°C)'
              />
            </Grid>
            <Grid item xs={12} className='chart_container'>
              <LineChart
                report={rainfallData}
                title='Rainfall Data'
                value='Rainfall (mm)'
              />
            </Grid>
          </Grid>
        ) : (
          <Grid item>
            <LineChart selectedSensor={selectedSensor} report={report} />
          </Grid>
        )}
      </Grid>
    </div>
  )
}

export default App
