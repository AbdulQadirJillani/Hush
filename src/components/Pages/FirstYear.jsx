import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './Pages.module.css'

export default function FirstYear(props) {
  return (
    <>
    <div className={styles.wrappergrid}>
      <div className={`${styles.modulewrapper} ${styles.foundation}`}>
        <h3 className={styles.moduleheading}>Foundation</h3>
        <hr />
        <Link onClick={()=>props.update('1st-year', 'foundation', '2016')} className={styles.link} to='foundation/2016'>2016</Link>
        <Link onClick={()=>props.update('1st-year', 'foundation', '2017')} className={styles.link} to='foundation/2017'>2017</Link>
        <Link onClick={()=>props.update('1st-year', 'foundation', '2018')} className={styles.link} to='foundation/2018'>2018</Link>
        <Link onClick={()=>props.update('1st-year', 'foundation', '2019')} className={styles.link} to='foundation/2019'>2019</Link>
        <Link onClick={()=>props.update('1st-year', 'foundation', '2020')} className={styles.link} to='foundation/2020'>2020</Link>
        <Link onClick={()=>props.update('1st-year', 'foundation', '2021')} className={styles.link} to='foundation/2021'>2021</Link>
        <Link onClick={()=>props.update('1st-year', 'foundation', '2022')} className={styles.link} to='foundation/2022'>2022</Link>
        <Link onClick={()=>props.update('1st-year', 'foundation', '2023')} className={styles.link} to='foundation/2023'>2023</Link>
      </div>

      <div className={`${styles.modulewrapper} ${styles.blood}`}>
        <h3 className={styles.moduleheading}>Blood</h3>
        <hr />
        <Link onClick={()=>props.update('1st-year', 'blood', '2016')} className={styles.link} to='blood/2016'>2016</Link>
        <Link onClick={()=>props.update('1st-year', 'blood', '2017')} className={styles.link} to='blood/2017'>2017</Link>
        <Link onClick={()=>props.update('1st-year', 'blood', '2018')} className={styles.link} to='blood/2018'>2018</Link>
        <Link onClick={()=>props.update('1st-year', 'blood', '2019')} className={styles.link} to='blood/2019'>2019</Link>
        <Link onClick={()=>props.update('1st-year', 'blood', '2020')} className={styles.link} to='blood/2020'>2020</Link>
        <Link onClick={()=>props.update('1st-year', 'blood', '2021')} className={styles.link} to='blood/2021'>2021</Link>
        <Link onClick={()=>props.update('1st-year', 'blood', '2022')} className={styles.link} to='blood/2022'>2022</Link>
        <Link onClick={()=>props.update('1st-year', 'blood', '2023')} className={styles.link} to='blood/2023'>2023</Link>
      </div>

      <div className={`${styles.modulewrapper} ${styles.locomotor}`}>
        <h3 className={styles.moduleheading}>Locomotor</h3>
        <hr />
        <Link onClick={()=>props.update('1st-year', 'locomotor', '2016')} className={styles.link} to='locomotor/2016'>2016</Link>
        <Link onClick={()=>props.update('1st-year', 'locomotor', '2017')} className={styles.link} to='locomotor/2017'>2017</Link>
        <Link onClick={()=>props.update('1st-year', 'locomotor', '2018')} className={styles.link} to='locomotor/2018'>2018</Link>
        <Link onClick={()=>props.update('1st-year', 'locomotor', '2019')} className={styles.link} to='locomotor/2019'>2019</Link>
        <Link onClick={()=>props.update('1st-year', 'locomotor', '2020')} className={styles.link} to='locomotor/2020'>2020</Link>
        <Link onClick={()=>props.update('1st-year', 'locomotor', '2021')} className={styles.link} to='locomotor/2021'>2021</Link>
        <Link onClick={()=>props.update('1st-year', 'locomotor', '2022')} className={styles.link} to='locomotor/2022'>2022</Link>
        <Link onClick={()=>props.update('1st-year', 'locomotor', '2023')} className={styles.link} to='locomotor/2023'>2023</Link>
      </div>

      <div className={`${styles.modulewrapper} ${styles.respiratory}`}>
        <h3 className={styles.moduleheading}>Respiratory</h3>
        <hr />
        <Link onClick={()=>props.update('1st-year', 'respiratory', '2016')} className={styles.link} to='respiratory/2016'>2016</Link>
        <Link onClick={()=>props.update('1st-year', 'respiratory', '2017')} className={styles.link} to='respiratory/2017'>2017</Link>
        <Link onClick={()=>props.update('1st-year', 'respiratory', '2018')} className={styles.link} to='respiratory/2018'>2018</Link>
        <Link onClick={()=>props.update('1st-year', 'respiratory', '2019')} className={styles.link} to='respiratory/2019'>2019</Link>
        <Link onClick={()=>props.update('1st-year', 'respiratory', '2020')} className={styles.link} to='respiratory/2020'>2020</Link>
        <Link onClick={()=>props.update('1st-year', 'respiratory', '2021')} className={styles.link} to='respiratory/2021'>2021</Link>
        <Link onClick={()=>props.update('1st-year', 'respiratory', '2022')} className={styles.link} to='respiratory/2022'>2022</Link>
        <Link onClick={()=>props.update('1st-year', 'respiratory', '2023')} className={styles.link} to='respiratory/2023'>2023</Link>
      </div>

      <div className={`${styles.modulewrapper} ${styles.cardiovascular}`}>
        <h3 className={styles.moduleheading}>Cardiovascular</h3>
        <hr />
        <Link onClick={()=>props.update('1st-year', 'cardiovascular', '2016')} className={styles.link} to='cardiovascular/2016'>2016</Link>
        <Link onClick={()=>props.update('1st-year', 'cardiovascular', '2017')} className={styles.link} to='cardiovascular/2017'>2017</Link>
        <Link onClick={()=>props.update('1st-year', 'cardiovascular', '2018')} className={styles.link} to='cardiovascular/2018'>2018</Link>
        <Link onClick={()=>props.update('1st-year', 'cardiovascular', '2019')} className={styles.link} to='cardiovascular/2019'>2019</Link>
        <Link onClick={()=>props.update('1st-year', 'cardiovascular', '2020')} className={styles.link} to='cardiovascular/2020'>2020</Link>
        <Link onClick={()=>props.update('1st-year', 'cardiovascular', '2021')} className={styles.link} to='cardiovascular/2021'>2021</Link>
        <Link onClick={()=>props.update('1st-year', 'cardiovascular', '2022')} className={styles.link} to='cardiovascular/2022'>2022</Link>
        <Link onClick={()=>props.update('1st-year', 'cardiovascular', '2023')} className={styles.link} to='cardiovascular/2023'>2023</Link>
      </div>
    </div>
    </>
  )
}