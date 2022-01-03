export const columns_table_farm = [
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

export const columns_table_monthly_farm = [
  {
    field: 'month',
    headerName: 'Month',
    flex: 0.25,
    minWidth: 50,
  },
  {
    field: 'year',
    headerName: 'Year',
    flex: 0.25,
    minWidth: 50,
  },
  {
    field: 'average',
    headerName: 'Average',
    type: 'number',
    flex: 0.5,
    minWidth: 50,
  },
  {
    field: 'median',
    headerName: 'Median',
    type: 'number',
    flex: 0.25,
    minWidth: 50,
  },

  {
    field: 'standard_deviation',
    headerName: 'Standard Deviation',
    type: 'number',
    flex: 0.25,
    minWidth: 100,
  },
]

export const MAX_ROW_LENGTH = 500

export const period_type = [
  { name: 'All', type: 'all' },
  { name: 'A Month', type: 'month' },
]

export const sensor_type = [
  { name: 'Choose sensor', type: 'none', unit: '', title: '' },
  {
    name: 'Temperature',
    type: 'temperature',
    unit: '°',
    title: 'Monthly Temperature',
  },
  { name: 'pH', type: 'ph', unit: '', title: 'Monthly pH' },
  { name: 'Rainfall', type: 'rainfall', unit: 'mm', title: 'Monthly Rainfall' },
]

export const selector_choice = [
  {
    name: 'Add New Farm',
    type: 'new',
  },
  {
    name: 'Add Data To Current Farm',
    type: 'current',
  },
]
