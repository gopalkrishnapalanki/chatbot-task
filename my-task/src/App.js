import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import BotFlow from './components/botFlow/BotFlow';

import Card from './components/Card/Card'
import Router from './components/Router/Router';

export default function App() {
  return (
    <div>
      {/* <Card/> */}
      {/* <Routes>
        <Route path="/" element={<Card />} />
        <Route path="/bot/:id/flow" element={<BotFlow />} />

    
      </Routes> */}
      <Router/>
    </div>
  )
}
