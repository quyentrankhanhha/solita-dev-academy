import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import React, { useEffect, useState } from 'react'
import { sensor_type } from '../../constant'

const LineChart = ({ report, selectedSensor }) => {
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
      chart: {
        width: '100%',
      },
      title: {
        text: 'test',
      },
      rangeSelector: {
        buttons: [
          {
            type: 'month',
            count: 1,
            text: '1M',
          },
          {
            type: 'year',
            count: 1,
            text: '1Y',
          },
          {
            type: 'all',
            count: 1,
            text: 'All',
          },
        ],
        selected: 1,
        inputEnabled: false,
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
          text: 'Test',
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
