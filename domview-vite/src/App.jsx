import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import { Section, SectionColumn } from './components/Section'
import Article from './components/Article'
import Aside from './components/Aside'
import DOMExplorerTerminal from './components/DOMExplorerCSS'
import './App.css'
import DOMExplorerCSS from './components/DOMExplorerCSS'
import DOMExplorerJS from './components/DOMExplorerJS'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header id="header">
        <h1>Welcome to DOM View</h1>
      </Header>
      <Main id="main">
        <Section className="css" style={{ display: 'flex', flexDirection: 'column' }}>
          <Article id="intro-article">
            <h2 className="article-heading">Getting Started!</h2>
            <p>
              To get started coding with AI tools like Co-Pilot, we need to
              understand the DOM (Document Object Model) structure of a webpage.
            </p>
          </Article>
          <Aside>
            <DOMExplorerCSS />
          </Aside>
        </Section>
        <Section className="js-dom">
          <Article id="intro-article">
            <h2 className="article-heading">Getting Started!</h2>
            <p>
              To get started coding with AI tools like Co-Pilot, we need to
              understand the DOM (Document Object Model) structure of a webpage.
            </p>
          </Article>
          <Aside>
            <DOMExplorerJS />
          </Aside>
        </Section>
        <SectionColumn style={{ display: 'flex', flexDirection: 'column' , border: '1px solid #ddd', padding: '1rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)'}}>
          <h2>Coding with AI Assistants</h2>
          <p>
            The following resource is a great way to understand how to best use AI in coding. It provides practical tips and examples to help you integrate AI tools effectively into your workflow.
          </p>
          
          <Section>
            <Article>
              <h2>Yegor Denisov-Blank</h2>
              <a
                href="https://www.youtube.com/watch?v=tbDDYKRFjhk"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'inline-block' }}
              >
                <img
                  src="https://img.youtube.com/vi/tbDDYKRFjhk/maxresdefault.jpg"
                  alt="DOM Tutorial Video Thumbnail"
                  style={{ width: '100%', maxWidth: '480px', borderRadius: '8px' }}
                />
              </a>
            </Article>
             <Article>
              <h2>Modern Software Engerring</h2>
              <a
                href="https://www.youtube.com/watch?v=1A6uPztchXk"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'inline-block' }}
              >
                <img
                  src="https://img.youtube.com/vi/1A6uPztchXk/maxresdefault.jpg"
                  alt="DOM Tutorial Video Thumbnail"
                  style={{ width: '100%', maxWidth: '480px', borderRadius: '8px' }}
                />
              </a>
            </Article>
                    <Article>
              <h2>Tina Huang</h2>
              <a
                href="https://www.youtube.com/watch?v=iLCDSY2XX7E"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'inline-block' }}
              >
                <img
                  src="https://img.youtube.com/vi/iLCDSY2XX7E/maxresdefault.jpg"
                  alt="DOM Tutorial Video Thumbnail"
                  style={{ width: '100%', maxWidth: '480px', borderRadius: '8px' }}
                />
              </a>
            </Article>
          </Section>
        </SectionColumn>
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
