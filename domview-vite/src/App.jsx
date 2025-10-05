import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header>
        <h1>Welcome to DOM View</h1>
      </Header>
      <Main>
        <p>This is the main content area.</p>
        </Main>
      <Footer />
    </>
  )
}

export default App
