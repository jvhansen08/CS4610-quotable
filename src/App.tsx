import { useState, useEffect } from 'react'
import { QuotePage } from './pages/QuotePage'
import './App.css'
import { Quote } from './interfaces'
import { getFirstQuote } from './apiCalls'

function App() {
  const [count, setCount] = useState(0)
  const [firstQuote, setQuote] = useState({content: "", author: ""})

  useEffect(() => {
    getQuote()
  }, []);

  async function getQuote() {
    // setQuote({
    //   content: "Hi friend",
    //   author: "General Kenobi",
    // })
    setQuote(await getFirstQuote());
  }

  return (
      <QuotePage author={firstQuote.author} content={firstQuote.content} />
    )
}

export default App
