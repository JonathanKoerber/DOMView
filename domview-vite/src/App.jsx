import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import Section from './components/Section'
import Article from './components/Article'
import Aside from './components/Aside'
import DOMExplorerTerminal from './components/DOMExplorerTerminal'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header>
        <h1>Welcome to DOM View</h1>
      </Header>
      <Main>
      <Section>
        <Article>
          <h2>Getting Started!</h2>
          <p>
            To get started coding with AI tools like Co-Pilot, we need to
            understand the DOM (Document Object Model) structure of a webpage.
          </p>
        </Article>
        <Aside>
          <DOMExplorerTerminal/>
        </Aside>
      </Section>
      <Section>
        
        <Article>
          <h2>Article 1</h2>
          <p>This is the content of Article 1.</p>
        </Article>
        <Article>
          <h2>Article 2</h2>
          <p>This is the content of Article 2.</p>
        </Article>
        <Article>
          <h2>Article 3</h2>
          <p>This is the content of Article 3.</p>
        </Article>
       </Section>
       <Article>
        <h3>Step One</h3>
        <p>Understand the DOM structure.</p>
      </Article>
      <Article>
        <h3>Step Two</h3>
        <p>Practice coding with AI assistance.</p>
       </Article>
      </Main>
      <Footer />
    </>
  )
}

export default App
