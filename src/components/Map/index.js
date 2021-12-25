import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Map = () => {
  return (
    <MapContainer
      style={{ height: '60vh', width: '50%' }}
      center={[61.49911, 23.78712]}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
        url='https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png'
      />
      <Marker position={[61.49911, 23.78712]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default Map
