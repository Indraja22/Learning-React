import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  
 let myObject = {
  userName : "Indraja",
  age : 28
 }

 let newArr = [1,2,3,4];

  return (
    <> 
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
      <Card username="ChaiAurCode" btnText="Contact Us" />
      <Card username="Indraja" />
    </>
  )
}

export default App
