import React, { useEffect, useState } from 'react'
import { getFarms } from './api'
import './App.css'
import Table from './components/Table'

function App() {
  const [farms, setFarms] = useState([])
  useEffect(() => {
    getFarms()
      .then((res) => {
        setFarms(res.data)
      })
      .catch((err) => console.log(err))
  }, [])
  return (
    <div className='App'>
      {farms?.map((farm) => (
        <Table key={`farm-${farm?.farm_id}`} farm={farm} />
      ))}
    </div>
  )
}

export default App
