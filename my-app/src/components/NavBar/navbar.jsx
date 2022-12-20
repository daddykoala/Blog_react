import React from 'react'

import'./navbar.scss'

function Navbar() {
  return (
    <div className='navbar'>
        
            <a href="">acceiul</a>
            <a href="">ecrire</a>
            <a href="">contact</a>
        
    </div>
  )
}

export default React.memo(Navbar)