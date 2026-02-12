import { useState } from 'react'
import './tw-styles.css'
import TitleBar from './components/TitleBar'
import MapDisplay from './components/MapDisplay'
import PlaqueModal from './components/PlaqueModal'  



function App() {

const [isModalOpen, setIsModalOpen] = useState(false)
const [selectedPlaque, setSelectedPlaque] = useState(null);


  return (
  <div className="mx-auto max-w-screen-xl bg-gray-50 min-h-screen">
    <TitleBar title="📚 OpenPlaques Recommended Reading" />
    <MapDisplay 
    longitude={-0.12574}
     latitude={51.50853}
      zoom={14} 
      setIsModalOpen={setIsModalOpen} 
      setSelectedPlaque={setSelectedPlaque}
      selectedPlaque={selectedPlaque} 
      />
    {isModalOpen ? <PlaqueModal setIsModalOpen={setIsModalOpen} selectedPlaque={selectedPlaque} /> : null}
  </div>
  )
}

export default App
