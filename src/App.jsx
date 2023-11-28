import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Weather, News, Error} from './pages/index'
import { Box } from '@mui/material'

function App() {
  return (
    <Box style={{overflow : 'hidden'}}>
      <Routes>
        <Route path="/" element={<Weather />} />
        <Route path="/news" element={<News />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Box>
  )
}

export default App