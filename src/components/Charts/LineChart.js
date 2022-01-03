import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import React, { useEffect, useState } from 'react'
import { sensor_type } from '../../constant'

const LineChart = ({ report, selectedSensor, title = '', value = '' }) => {
  const [options, setOptions] = useState({})
  let sensor, date
  if (selectedSensor) {
    sensor = sensor_type?.find((item) => item?.type === selectedSensor) || ''
    date = report?.map((item) => `${item.month}-${item.year}`)
  }
  const monthlyOptions = () => {
    return {
      rangeSelector: {
        selected: 1,
      },
      title: {
        text: sensor?.title,
      },
      xAxis: [
        {
          categories: date,
          crosshair: true,
        },
      ],
      yAxis: {
        title: {
          text: sensor?.unit,
        },
      },
      series: [
        {
          name: 'Average',
          data: report?.map((item) => item.average),
          tooltip: {
            valueDecimals: 2,
          },
        },
      ],
    }
  }

  const eachOptions = () => {
    return {
      title: {
        text: title,
      },
      xAxis: [
        {
          type: 'datetime',
          categories: report?.map((item) => item.datetime),
          crosshair: true,
        },
      ],
      yAxis: {
        title: {
          text: value,
        },
      },
      series: [
        {
          name: 'Value',
          data: report?.map((item) => item.value),
          tooltip: {
            valueDecimals: 2,
          },
        },
      ],
    }
  }

  useEffect(() => {
    setOptions(selectedSensor ? monthlyOptions : eachOptions)
  }, [report])
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  )
}

export default LineChart
