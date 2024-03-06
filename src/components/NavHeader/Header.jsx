import React, { useState } from 'react'
import { Link } from "react-router-dom";
import DarkMode from '../DarkMode/DarkMode';
import styles from './Nav.module.css'
import logo from './logo.png'

export default function Header() {
  const [active, setActive] = useState(false)
  function toggle() {
    setActive(prevActive => !prevActive)
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarcontainer}>

        <button className={styles.hamburgerbtn} onClick={toggle}>
          <svg 
          className={active ? `${styles.hamburger} ${styles.activehamburger}`: styles.hamburger} 
          width="55px"
          height="29px"
          >
            <rect className={styles.line1}
            width="35px"
            height="3px"
            x="10px"
            y="5px"
            rx="2.5px"
            />

            <rect className={styles.line2}
            width="35px"
            height="3px"
            x="10px"
            y="13px"
            rx="2.5px"
            />

            <rect className={styles.line3}
            width="35px"
            height="3px"
            x="10px"
            y="21px"
            rx="2.5px"
            />
          </svg>
        </button>

        <ul className={active ? `${styles.menuitems} ${styles.activemenuitems}`: styles.menuitems}>
            <li><Link to='1st-year' onClick={toggle}>1st Year</Link></li>
            <li><Link to='2nd-year' onClick={toggle}>2nd Year</Link></li>
            <li><Link to='3rd-year' onClick={toggle}>3rd Year</Link></li>
            <li><DarkMode tog={toggle}/></li>
        </ul>

        <Link className={styles.logo} to='.'>
          <img src={logo} alt="" />
          <h1>MedEval</h1>
        </Link>

      </div>
    </nav>
  )
}