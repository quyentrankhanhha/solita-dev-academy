import Highchart from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import React, { useEffect, useState } from 'react'

const LineChart = ({ report }) => {
  const [options, setOptions] = useState({})

  const generateOptions = () => {}

  useEffect(() => {
    setOptions(generateOptions)
  })
  return (
    <div>
      <HighchartsReact highcharts={Highchart} options={options} />
    </div>
  )
}

export default LineChart
