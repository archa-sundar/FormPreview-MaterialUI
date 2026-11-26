
import { Routes, Route } from 'react-router-dom'
import Form from './component/Form'

import './App.css'
import  Preview  from './component/Preview'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Form />} />
        <Route path='/' element={<Preview/>}/>
      </Routes>
    </>
  )
}

export default App
