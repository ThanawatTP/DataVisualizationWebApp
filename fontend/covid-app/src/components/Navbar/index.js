import React from 'react'
import { useState } from 'react'

export default function Navbar() {
  const [isActive, setisActive] = useState(false)

  return (
    <nav className='navbar' role='navigation' aria-label='main navigation'>
      <div className='navbar-brand'>
        <a href='/' className='navbar-item' style={{ fontWeight: 'bold' }}>
          Data Visualization
        </a>

        <a
          onClick={() => {
            setisActive(!isActive)
          }}
          role='button'
          className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
          aria-label='menu'
          aria-expanded='false'
          data-target='navbarBasicExample'
        >
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
        </a>
      </div>
      <div id='navbarBasicExample' className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
        <div className='navbar-end'>
          <div className='navbar-item'>
            <a href='/' className='navbar-item'>
              Home
            </a>
            <a href='/covid' className='navbar-item'>
              Covid-19
            </a>
            <a href='/about' className='navbar-item'>
              About-Us
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}