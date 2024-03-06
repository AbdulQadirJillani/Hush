import React from "react";
import Sun from './Sun.jsx'
import Moon from './Moon.jsx'
import styles from "./DarkMode.module.css";

function DarkMode(props) {
    function toggleDark() {
        document.querySelector('body').setAttribute('data-theme', 'dark')
        props.tog()
    }

    function toggleLight() {
        document.querySelector('body').setAttribute('data-theme', 'light')
        props.tog()
    }

    function toggle(e) {
        e.target.checked ? toggleDark() : toggleLight()
    }

    return (
        <div className={styles.dark_mode}>
            <input
                className={styles.dark_mode_input}
                type='checkbox'
                id='darkmode-toggle'
                onChange={toggle}
            />
            <label 
            className={styles.dark_mode_label}
            htmlFor='darkmode-toggle'>
                <Sun />
                <Moon />
            </label>
        </div>
    );
};

export default DarkMode;