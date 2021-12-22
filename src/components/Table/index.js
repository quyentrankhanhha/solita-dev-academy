import { DataGrid } from '@mui/x-data-grid'
import React, { useEffect, useState } from 'react'
import { getStatsFarm } from '../../api'

const columns = [
  { field: 'farm_id', headerName: 'Farm ID', width: 100 },
  { field: 'datetime', headerName: 'Date Time', width: 300 },
  { field: 'sensor_type', headerName: 'Sensor Type', width: 200 },
  {
    field: 'location',
    headerName: 'Location',
    width: 300,
  },
  {
    field: 'value',
    headerName: 'Value',
    type: 'number',
    width: 100,
  },
]

const Table = ({ farm }) => {
  const [data, setData] = useState([])

  useEffect(() => {
    getStatsFarm(farm?.farm_id)
      .then((res) => {
        setData(res.data.measurements)
      })
      .catch((err) => console.log(err))
  }, [])
  console.log(data)

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        getRowId={(r) => r.value}
        rows={data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  )
}

export default Table
