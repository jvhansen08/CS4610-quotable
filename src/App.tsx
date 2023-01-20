import { useState, useEffect } from 'react'
import { QuotePage } from './pages/QuotePage'
import './App.css'
import { Quote } from './interfaces'

function App() {
  const [count, setCount] = useState(0)
  const [firstQuote, setQuote] = useState({content: "", author: ""})

  useEffect(() => {
    getQuote()
  }, []);

  function getQuote() {
    setQuote({
      content: "Hi friend",
      author: "General Kenobi",
    })
  }

  return (
      <QuotePage author={firstQuote.author} content={firstQuote.content} />
    )
}

export default App
