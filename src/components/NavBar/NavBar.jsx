import React from 'react'
import styles from "./NavBar.module.css"
import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
  return (
    <div className={styles.container}>
      <nav className={`navbar navbar-expand-lg navbar-dark bg-dark ${styles.nav}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">🎮</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className={`navbar-nav ${styles.ul}`}>
              <li className="nav-item">
                 <a className="nav-link active" aria-current="page" href="#">Inicio</a>
              </li>
              <li className={`nav-item ${styles.icon}`}>
                 <span>
                  <CartWidget />
                 </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar