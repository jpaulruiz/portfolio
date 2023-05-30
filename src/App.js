import styled from "styled-components"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useEffect, useRef } from "react";
import Navbar from "./component/Navbar"
import Footer from "./component/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import Experience from "./pages/Experience";
import Contacts from "./pages/Contacts"
import royce from "./images/royce.PNG"

import "./App.css"

const Container = styled.div`
  display: flex;
  flex-direction: row;
`
const CursorFollower = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    font-size: 1.3rem;
    border: none;
    cursor: pointer;
    outline: none;
    overflow: hidden;
    z-index: 0;
    width: 100vw;
    height: 100vh;

    &:before {
        --size: 0;
        content: '';
        position: absolute;
        left: var(--x);
        top: var(--y);
        width: var(--size);
        height: var(--size);
        background: radial-gradient(circle closest-side, rgb(43, 41, 41), transparent 80%);
        transform: translate(-50%, -50%);
        transition: width 0.2s ease, height 0.2s ease;
        // animation: pulse 1s infinite;
    }

    &:hover {
        &:before {
            --size: 90vw;
        }
    }

    @keyframes pulse {
      0% {
          transform: translate(-50%, -50%) scale(0.1);
          background: radial-gradient(circle closest-side, rgb(43, 41, 41), transparent 80%);
      }
      50% {
          transform: translate(-50%, -50%) scale(1);
          background: radial-gradient(circle closest-side, rgb(43, 41, 41), transparent 80%);
      }
      100% {
          transform: translate(-50%, -50%) scale(0.1);
          background: radial-gradient(circle closest-side, rgb(43, 41, 41), transparent 80%);
      }
    }

    @media only screen and (max-width: 1090px) {
      overflow: scroll;
    }
`

const App = () => {
  const cursorGradientRef = useRef(null)

  useEffect(() => {
    //icon & title
    document.title = 'Royce | Software Developer'
    const icon = document.querySelector('link[rel="icon"]') || document.createElement('link')
    icon.rel = 'icon'
    icon.type = 'image/png'
    icon.href = royce
    document.head.appendChild(icon)

    //cursor adjustment
    const cursorGradient = cursorGradientRef.current
    cursorGradient.addEventListener("mousemove",
        (e) => {
            cursorGradient.style.setProperty("--x", e.clientX + "px")
            cursorGradient.style.setProperty("--y", e.clientY + "px")
        }
    )
  }, [])

  return (
      <Container>
        <BrowserRouter>
            <CursorFollower ref={cursorGradientRef}>
              <Navbar/>
              <Routes>
                  <Route exact path="/" element={<Home/>}/>
                  <Route path="/about" element={<About/>}/>
                  <Route path="/experience" element={<Experience/>}/>
                  <Route path="/contact" element={<Contacts/>}/>
                  <Route path="*" element={<Home/>}/>
              </Routes>
              <Footer/>
            </CursorFollower>
        </BrowserRouter>
      </Container>
  )
}
export default App
