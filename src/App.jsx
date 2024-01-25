import { useState } from "react"

import AvatarDark from "./assets/avatar.png"
import AvatarLight from "./assets/avatar-light.png"

import "./App.css"

function App() {
  const [avatar, setAvatar] = useState(AvatarDark)
  
  function handleSwitchThemeMode() {
    document.documentElement.classList.toggle("light")
    setAvatar((actualAvatar) => {
      return actualAvatar === AvatarDark ? AvatarLight : AvatarDark
    })
  }

  return (
    <div className="App">
      <div id="profile">
        <img
          src={avatar}
          alt="****************"
        />
        <p>@poveii</p>
      </div>

      <div id="switch" onClick={handleSwitchThemeMode}>
        <button></button>
        <span></span>
      </div>

      <ul>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
      </ul>

      <div id="social-links">
        <a href="https://github.***">
          <ion-icon name="logo-github"></ion-icon>
        </a>
        <a href="https://www.instagram.com/****">
          <ion-icon name="logo-instagram"></ion-icon>
        </a>
        <a href="#">
          <ion-icon name="logo-youtube"></ion-icon>
        </a>
        <a href="https://www.linkedin.com/in/****">
          <ion-icon name="logo-linkedin"></ion-icon>
        </a>
      </div>
  )
}

export default App
