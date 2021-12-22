import axios from 'axios'

export const getFarms = () => axios.get('/v1/farms')

export const getFarmById = (farm_id) => axios.get(`/v1/farms/${farm_id}`)

export const getStatsFarm = (farm_id) => axios.get(`/v1/farms/${farm_id}/stats`)

export const getStatsFarmMonthly = (farm_id, sensor_type) =>
  axios.get(`/v1/farms/${farm_id}/stats/${sensor_type}/monthly`)
