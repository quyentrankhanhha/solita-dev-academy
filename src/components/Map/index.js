import { Typography } from '@mui/material'
import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Map = ({ farms, handleOnFarmChange }) => {
  console.log(farms)
  const latlngData = { lat: 61.49911, lng: 23.78712 }

  const test = farms?.map((farm) => [{ ...farm, latlngData }])
  console.log(test)
  return (
    <MapContainer
      style={{ height: '50vh', width: '100%' }}
      center={[61.49911, 23.78712]}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
        url='https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png'
      />
      {farms?.map((farm, index) => (
        <Marker
          eventHandlers={{
            click: (e) => {
              console.log('marker clicked', e)
            },
          }}
          key={`farm-${index}`}
          position={[61.49911, 23.78712]}
        >
          <Popup>
            <Typography>
              <strong>Location: </strong> {farm?.location}
            </Typography>
            <Typography>
              <strong>Name:</strong> {farm?.name}
            </Typography>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}

export default Map
