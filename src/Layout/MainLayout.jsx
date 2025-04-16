import React from 'react'
import { createContext } from 'react'
import Navbar from '../components/Navbar'

const MainLayoutContext = createContext()
const MainLayout = ({children}) => {
  return (
    <MainLayoutContext.Provider value={null}>
        <Navbar/>
      {children}
    </MainLayoutContext.Provider>
  )
}

export default MainLayout