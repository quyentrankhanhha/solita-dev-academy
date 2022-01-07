import { Typography } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Map = ({ farms, handleOnFarmChange }) => {
  const [popupOpen, setPopupOpen] = useState(false)
  const [map, setMap] = useState()
  let markerRefs = useRef({})

  useEffect(() => {
    if (popupOpen) {
      markerRefs.openOn(map)
    }
  }, [markerRefs, map])
  return (
    <MapContainer
      style={{ height: '50vh', width: '100%' }}
      center={[61.49911, 23.78712]}
      zoom={5}
      scrollWheelZoom={false}
      whenCreated={setMap}
    >
      <TileLayer
        attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
        url='https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png'
      />
      {farms?.map((farm, index) => (
        <Marker
          eventHandlers={{
            click: (e) => {
              console.log('marker clicked', e.latlng)
            },
          }}
          key={`farm-${index}`}
          position={[farm?.latlngData?.lat, farm?.latlngData?.lng]}
        >
          <Popup
            ref={(r) => {
              markerRefs = r
              setPopupOpen(true)
            }}
          >
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
