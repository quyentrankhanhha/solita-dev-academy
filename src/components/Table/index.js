import { DataGrid } from '@mui/x-data-grid'
import React from 'react'
import { columns_table } from '../../constant'

const Table = ({ farm }) => {
  return (
    <div style={{ height: 400, width: '50%' }}>
      <DataGrid
        getRowId={(r) => r.value}
        rows={farm}
        columns={columns_table}
        pageSize={10}
        rowsPerPageOptions={[10]}
      />
    </div>
  )
}

export default Table
