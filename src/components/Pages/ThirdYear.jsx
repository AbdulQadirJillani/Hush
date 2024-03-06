import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Pages.module.css'

export default function ThirdYear(props) {
  return (
    <>
    <div className={styles.wrappergrid}>
    <div className={`${styles.modulewrapper} ${styles.foundation}`}>
        <h3 className={styles.moduleheading}>Foundation</h3>
        <hr />
        <Link onClick={()=>props.update('3rd-year', 'foundation', '2023')} className={styles.link} to='foundation/2023'>2023</Link>
      </div>

      <div className={`${styles.modulewrapper} ${styles.infectious}`}>
        <h3 className={styles.moduleheading}>Infectious</h3>
        <hr />
        <Link onClick={()=>props.update('3rd-year', 'infectious', '2017')} className={styles.link} to='infectious/2017'>2017</Link>
        <Link onClick={()=>props.update('3rd-year', 'infectious', '2018')} className={styles.link} to='infectious/2018'>2018</Link>
        <Link onClick={()=>props.update('3rd-year', 'infectious', '2019')} className={styles.link} to='infectious/2019'>2019</Link>
        <Link onClick={()=>props.update('3rd-year', 'infectious', '2020')} className={styles.link} to='infectious/2020'>2020</Link>
        <Link onClick={()=>props.update('3rd-year', 'infectious', '2021')} className={styles.link} to='infectious/2021'>2021</Link>
        <Link onClick={()=>props.update('3rd-year', 'infectious', '2022')} className={styles.link} to='infectious/2022'>2022</Link>
        <Link onClick={()=>props.update('3rd-year', 'infectious', '2023')} className={styles.link} to='infectious/2023'>2023</Link>
      </div>

      <div className={`${styles.modulewrapper} ${styles.blood}`}>
        <h3 className={styles.moduleheading}>Hematology</h3>
        <hr />
        <Link onClick={()=>props.update('3rd-year', 'hematology', '2017')} className={styles.link} to='hematology/2017'>2017</Link>
        <Link onClick={()=>props.update('3rd-year', 'hematology', '2018')} className={styles.link} to='hematology/2018'>2018</Link>
        <Link onClick={()=>props.update('3rd-year', 'hematology', '2019')} className={styles.link} to='hematology/2019'>2019</Link>
        <Link onClick={()=>props.update('3rd-year', 'hematology', '2020')} className={styles.link} to='hematology/2020'>2020</Link>
        <Link onClick={()=>props.update('3rd-year', 'hematology', '2021')} className={styles.link} to='hematology/2021'>2021</Link>
        <Link onClick={()=>props.update('3rd-year', 'hematology', '2022')} className={styles.link} to='hematology/2022'>2022</Link>
        <Link onClick={()=>props.update('3rd-year', 'hematology', '2023')} className={styles.link} to='hematology/2023'>2023</Link>
      </div>

      <div className={`${styles.modulewrapper} ${styles.respiratory}`}>
        <h3 className={styles.moduleheading}>Respiratory</h3>
        <hr />
        <Link onClick={()=>props.update('3rd-year', 'respiratory', '2017')} className={styles.link} to='respiratory/2017'>2017</Link>
        <Link onClick={()=>props.update('3rd-year', 'respiratory', '2018')} className={styles.link} to='respiratory/2018'>2018</Link>
        <Link onClick={()=>props.update('3rd-year', 'respiratory', '2019')} className={styles.link} to='respiratory/2019'>2019</Link>
        <Link onClick={()=>props.update('3rd-year', 'respiratory', '2020')} className={styles.link} to='respiratory/2020'>2020</Link>
        <Link onClick={()=>props.update('3rd-year', 'respiratory', '2021')} className={styles.link} to='respiratory/2021'>2021</Link>
        <Link onClick={()=>props.update('3rd-year', 'respiratory', '2022')} className={styles.link} to='respiratory/2022'>2022</Link>
        <Link onClick={()=>props.update('3rd-year', 'respiratory', '2023')} className={styles.link} to='respiratory/2023'>2023</Link>
      </div>

      <div className={`${styles.modulewrapper} ${styles.cardiovascular}`}>
        <h3 className={styles.moduleheading}>Cardiovascular</h3>
        <hr />
        <Link onClick={()=>props.update('3rd-year', 'cardiovascular', '2016')} className={styles.link} to='cardiovascular/2016'>2016</Link>
        <Link onClick={()=>props.update('3rd-year', 'cardiovascular', '2017')} className={styles.link} to='cardiovascular/2017'>2017</Link>
        <Link onClick={()=>props.update('3rd-year', 'cardiovascular', '2018')} className={styles.link} to='cardiovascular/2018'>2018</Link>
        <Link onClick={()=>props.update('3rd-year', 'cardiovascular', '2019')} className={styles.link} to='cardiovascular/2019'>2019</Link>
        <Link onClick={()=>props.update('3rd-year', 'cardiovascular', '2020')} className={styles.link} to='cardiovascular/2020'>2020</Link>
        <Link onClick={()=>props.update('3rd-year', 'cardiovascular', '2021')} className={styles.link} to='cardiovascular/2021'>2021</Link>
        <Link onClick={()=>props.update('3rd-year', 'cardiovascular', '2022')} className={styles.link} to='cardiovascular/2022'>2022</Link>
        <Link onClick={()=>props.update('3rd-year', 'cardiovascular', '2023')} className={styles.link} to='cardiovascular/2023'>2023</Link>
      </div>

      <div className={`${styles.modulewrapper} ${styles.gastrointestinal}`}>
        <h3 className={styles.moduleheading}>Gastrointestinal</h3>
        <hr />
        <Link onClick={()=>props.update('3rd-year', 'gastrointestinal', '2017')} className={styles.link} to='gastrointestinal/2017'>2017</Link>
        <Link onClick={()=>props.update('3rd-year', 'gastrointestinal', '2018')} className={styles.link} to='gastrointestinal/2018'>2018</Link>
        <Link onClick={()=>props.update('3rd-year', 'gastrointestinal', '2019')} className={styles.link} to='gastrointestinal/2019'>2019</Link>
        <Link onClick={()=>props.update('3rd-year', 'gastrointestinal', '2020')} className={styles.link} to='gastrointestinal/2020'>2020</Link>
        <Link onClick={()=>props.update('3rd-year', 'gastrointestinal', '2021')} className={styles.link} to='gastrointestinal/2021'>2021</Link>
        <Link onClick={()=>props.update('3rd-year', 'gastrointestinal', '2022')} className={styles.link} to='gastrointestinal/2022'>2022</Link>
        <Link onClick={()=>props.update('3rd-year', 'gastrointestinal', '2023')} className={styles.link} to='gastrointestinal/2023'>2023</Link>
      </div>

      <div className={`${styles.modulewrapper} ${styles.renal}`}>
        <h3 className={styles.moduleheading}>Renal</h3>
        <hr />
        <Link onClick={()=>props.update('3rd-year', 'renal', '2016')} className={styles.link} to='renal/2016'>2016</Link>
        <Link onClick={()=>props.update('3rd-year', 'renal', '2017')} className={styles.link} to='renal/2017'>2017</Link>
        <Link onClick={()=>props.update('3rd-year', 'renal', '2018')} className={styles.link} to='renal/2018'>2018</Link>
        <Link onClick={()=>props.update('3rd-year', 'renal', '2019')} className={styles.link} to='renal/2019'>2019</Link>
        <Link onClick={()=>props.update('3rd-year', 'renal', '2020')} className={styles.link} to='renal/2020'>2020</Link>
        <Link onClick={()=>props.update('3rd-year', 'renal', '2021')} className={styles.link} to='renal/2021'>2021</Link>
        <Link onClick={()=>props.update('3rd-year', 'renal', '2022')} className={styles.link} to='renal/2022'>2022</Link>
        <Link onClick={()=>props.update('3rd-year', 'renal', '2023')} className={styles.link} to='renal/2023'>2023</Link>
      </div>

      <div className={`${styles.modulewrapper} ${styles.endocrinology}`}>
        <h3 className={styles.moduleheading}>Endocrinology</h3>
        <hr />
        <Link onClick={()=>props.update('3rd-year', 'endocrinology', '2017')} className={styles.link} to='endocrinology/2017'>2017</Link>
        <Link onClick={()=>props.update('3rd-year', 'endocrinology', '2018')} className={styles.link} to='endocrinology/2018'>2018</Link>
        <Link onClick={()=>props.update('3rd-year', 'endocrinology', '2019')} className={styles.link} to='endocrinology/2019'>2019</Link>
        <Link onClick={()=>props.update('3rd-year', 'endocrinology', '2020')} className={styles.link} to='endocrinology/2020'>2020</Link>
        <Link onClick={()=>props.update('3rd-year', 'endocrinology', '2021')} className={styles.link} to='endocrinology/2021'>2021</Link>
        <Link onClick={()=>props.update('3rd-year', 'endocrinology', '2022')} className={styles.link} to='endocrinology/2022'>2022</Link>
        <Link onClick={()=>props.update('3rd-year', 'endocrinology', '2023')} className={styles.link} to='endocrinology/2023'>2023</Link>
      </div>
    </div>
    </>
  )
}