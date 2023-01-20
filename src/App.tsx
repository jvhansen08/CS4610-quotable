import { useState, useEffect } from 'react'
import { QuotePage } from './pages/QuotePage'
import './App.css'
import { Quote } from './interfaces'
import { getFirstQuote } from './apiCalls'

function App() {
  return(
    <div>
        <QuotePage />
    </div>
  )
}

export default App
