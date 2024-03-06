import React, { useEffect, useState } from 'react'
import styles from './Home.module.css'
import diabetes from './img/diabetes.jpg'
import rabies from './img/rabies.jpg'
import malaria from './img/malaria.jpeg'
import hepatitis from './img/hepatitis.jpeg'
import polio from './img/polio.jpg'
import suicide from './img/suicide.jpg'
import thalessemia from './img/thalessemia.jpg'
import aids from './img/aids.jpg'
import hypertension from './img/hypertension.jpeg'

export default function Home() {
  const tidbits = [
    {
      description: 'World Malaria Day',
      date: '25th April',
      url: malaria
    },
    {
      description: 'World Thalassemia Day',
      date: '8th May',
      url: thalessemia
    },
    {
      description: 'World Hypertension Day',
      date: '17th May',
      url: hypertension
    },
    {
      description: 'World Hepatitis Day',
      date: '28th July',
      url: hepatitis
    },
    {
      description: 'World Suicide Prevention Day',
      date: '10th September',
      url: suicide
    },
    {
      description: 'World Rabies Day',
      date: '28th September',
      url: rabies
    },
    {
      description: 'World Polio Day',
      date: '24th October',
      url: polio
    },
    {
      description: 'World Diabetes Day',
      date: '14th November',
      url: diabetes
    },
    {
      description: 'World AIDS Day',
      date: '1st December',
      url: aids
    },
  ]
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {setIndex((i) => (i===8 ? 0 : i + 1))}, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section>
      <div className={styles.content}>
        <div className={styles.motto}>
          Embracing the chaos
        </div>

        <div className={styles.swiper}>
          {tidbits.map((tidbit, i) => (
            <div key={tidbit.description} className={`${styles.swiperslide} ${styles['slide' + (i-index)]}`}>
              <img src={tidbit.url} alt="" />
              <div className={styles.overlay}>
              <span>{tidbit.date}</span>
              <h2>{tidbit.description}</h2>
            </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}