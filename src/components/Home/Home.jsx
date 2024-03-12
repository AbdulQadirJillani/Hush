import React, { useEffect, useState } from 'react'
import styles from './Home.module.css'

export default function Home() {
  return (
    <section>
      <div className={styles.content}>
        <span className={styles.motto}>
          Embracing the chaos
        </span>
      </div>
    </section>
  );
}