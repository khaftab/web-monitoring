import { useState } from 'react'
import Home from './Components/Home'
import Services from './Components/Services'
import ResponseChart from './Components/ResponseChart'

function App() {

  return (
    <>
      <div className='bg-gray-50 min-h-screen pb-16'>
        <Home />
        <Services />
        <ResponseChart />
      </div>
    </>
  )
}

export default App
