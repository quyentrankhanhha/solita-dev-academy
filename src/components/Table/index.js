import { DataGrid } from '@mui/x-data-grid'
import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import { columns_table_farm, columns_table_monthly_farm } from '../../constant'

const Table = ({ farm, selectedPeriod }) => {
  return (
    <div style={{ height: '50vh', width: '100%' }}>
      <DataGrid
        getRowId={(r) => uuidv4()}
        rows={farm}
        columns={
          selectedPeriod === 'all'
            ? columns_table_farm
            : columns_table_monthly_farm
        }
        pageSize={10}
        rowsPerPageOptions={[10]}
      />
    </div>
  )
}

export default Table
