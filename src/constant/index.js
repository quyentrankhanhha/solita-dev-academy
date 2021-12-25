export const columns_table = [
  { field: 'datetime', headerName: 'Date Time', flex: 0.5, minWidth: 100 },
  {
    field: 'sensor_type',
    headerName: 'Sensor Type',
    flex: 0.25,
    minWidth: 50,
  },
  {
    field: 'value',
    headerName: 'Value',
    type: 'number',
    flex: 0.25,
    minWidth: 50,
  },
]

export const MAX_ROW_LENGTH = 500

export const period_type = [
  { name: 'All', type: 'all' },
  { name: 'A Month', type: 'month' },
]

export const sensor_type = ['tamperature', 'ph', 'rainfall']
