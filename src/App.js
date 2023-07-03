import React from 'react';
import {ColorModeContext, useMode} from './theme';
import {CssBaseline, ThemeProvider} from '@mui/material';
import { Routes, Route } from "react-router-dom"
import Topbar from "./scenes/global/Topbar"
import Sidebar from "./scenes/global/Sidebar"
import Dashboard from './scenes/dashboard'
import Leagues from "./scenes/Leagues"

function App() {
  const [theme, colorMode] = useMode();

  return (
  
  <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme ={theme}>
      <CssBaseline />
      <div className="app">
        <Sidebar />
        <main className="content">
          <Topbar></Topbar>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/Leagues" element={<Leagues />} />

          </Routes>
          
        </main>
      </div>
    </ThemeProvider>
  </ColorModeContext.Provider>
  
  )
    

   
}

export default App;
