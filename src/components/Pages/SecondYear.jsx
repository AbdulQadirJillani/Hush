import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Pages.module.css'

export default function SecondYear(props) {
  return (
    <>
    <div className={styles.wrappergrid}>
    <div className={`${styles.modulewrapper} ${styles.neuroscience}`}>
        <h3 className={styles.moduleheading}>Neuroscience</h3>
        <hr />
        <Link onClick={()=>props.update('2nd-year', 'neuroscience', '2016')} className={styles.link} to='neuroscience/2016'>2016</Link>
        <Link onClick={()=>props.update('2nd-year', 'neuroscience', '2017')} className={styles.link} to='neuroscience/2017'>2017</Link>
        <Link onClick={()=>props.update('2nd-year', 'neuroscience', '2018')} className={styles.link} to='neuroscience/2018'>2018</Link>
        <Link onClick={()=>props.update('2nd-year', 'neuroscience', '2019')} className={styles.link} to='neuroscience/2019'>2019</Link>
        <Link onClick={()=>props.update('2nd-year', 'neuroscience', '2020')} className={styles.link} to='neuroscience/2020'>2020</Link>
        <Link onClick={()=>props.update('2nd-year', 'neuroscience', '2021')} className={styles.link} to='neuroscience/2021'>2021</Link>
        <Link onClick={()=>props.update('2nd-year', 'neuroscience', '2022')} className={styles.link} to='neuroscience/2022'>2022</Link>
        <Link onClick={()=>props.update('2nd-year', 'neuroscience', '2023')} className={styles.link} to='neuroscience/2023'>2023</Link>
      </div>

      <div className={`${styles.modulewrapper} ${styles.headneck}`}>
        <h3 className={styles.moduleheading}>Head & Neck</h3>
        <hr />
        <Link onClick={()=>props.update('2nd-year', 'head-and-neck', '2016')} className={styles.link} to='head-and-neck/2016'>2016</Link>
        <Link onClick={()=>props.update('2nd-year', 'head-and-neck', '2017')} className={styles.link} to='head-and-neck/2017'>2017</Link>
        <Link onClick={()=>props.update('2nd-year', 'head-and-neck', '2018')} className={styles.link} to='head-and-neck/2018'>2018</Link>
        <Link onClick={()=>props.update('2nd-year', 'head-and-neck', '2019')} className={styles.link} to='head-and-neck/2019'>2019</Link>
        <Link onClick={()=>props.update('2nd-year', 'head-and-neck', '2020')} className={styles.link} to='head-and-neck/2020'>2020</Link>
        <Link onClick={()=>props.update('2nd-year', 'head-and-neck', '2021')} className={styles.link} to='head-and-neck/2021'>2021</Link>
        <Link onClick={()=>props.update('2nd-year', 'head-and-neck', '2022')} className={styles.link} to='head-and-neck/2022'>2022</Link>
        <Link onClick={()=>props.update('2nd-year', 'head-and-neck', '2023')} className={styles.link} to='head-and-neck/2023'>2023</Link>
      </div>

      <div className={`${styles.modulewrapper} ${styles.endocrinology}`}>
        <h3 className={styles.moduleheading}>Endocrinology</h3>
        <hr />
        <Link onClick={()=>props.update('2nd-year', 'endocrinology', '2016')} className={styles.link} to='endocrinology/2016'>2016</Link>
        <Link onClick={()=>props.update('2nd-year', 'endocrinology', '2017')} className={styles.link} to='endocrinology/2017'>2017</Link>
        <Link onClick={()=>props.update('2nd-year', 'endocrinology', '2018')} className={styles.link} to='endocrinology/2018'>2018</Link>
        <Link onClick={()=>props.update('2nd-year', 'endocrinology', '2019')} className={styles.link} to='endocrinology/2019'>2019</Link>
        <Link onClick={()=>props.update('2nd-year', 'endocrinology', '2020')} className={styles.link} to='endocrinology/2020'>2020</Link>
        <Link onClick={()=>props.update('2nd-year', 'endocrinology', '2021')} className={styles.link} to='endocrinology/2021'>2021</Link>
        <Link onClick={()=>props.update('2nd-year', 'endocrinology', '2022')} className={styles.link} to='endocrinology/2022'>2022</Link>
        <Link onClick={()=>props.update('2nd-year', 'endocrinology', '2023')} className={styles.link} to='endocrinology/2023'>2023</Link>
      </div>

      <div className={`${styles.modulewrapper} ${styles.gastrointestinal}`}>
        <h3 className={styles.moduleheading}>Gastrointestinal</h3>
        <hr />
        <Link onClick={()=>props.update('2nd-year', 'gastrointestinal', '2016')} className={styles.link} to='gastrointestinal/2016'>2016</Link>
        <Link onClick={()=>props.update('2nd-year', 'gastrointestinal', '2017')} className={styles.link} to='gastrointestinal/2017'>2017</Link>
        <Link onClick={()=>props.update('2nd-year', 'gastrointestinal', '2018')} className={styles.link} to='gastrointestinal/2018'>2018</Link>
        <Link onClick={()=>props.update('2nd-year', 'gastrointestinal', '2019')} className={styles.link} to='gastrointestinal/2019'>2019</Link>
        <Link onClick={()=>props.update('2nd-year', 'gastrointestinal', '2020')} className={styles.link} to='gastrointestinal/2020'>2020</Link>
        <Link onClick={()=>props.update('2nd-year', 'gastrointestinal', '2021')} className={styles.link} to='gastrointestinal/2021'>2021</Link>
        <Link onClick={()=>props.update('2nd-year', 'gastrointestinal', '2022')} className={styles.link} to='gastrointestinal/2022'>2022</Link>
        <Link onClick={()=>props.update('2nd-year', 'gastrointestinal', '2023')} className={styles.link} to='gastrointestinal/2023'>2023</Link>
      </div>

      <div className={`${styles.modulewrapper} ${styles.renal}`}>
        <h3 className={styles.moduleheading}>Renal</h3>
        <hr />
        <Link onClick={()=>props.update('2nd-year', 'renal', '2016')} className={styles.link} to='renal/2016'>2016</Link>
        <Link onClick={()=>props.update('2nd-year', 'renal', '2017')} className={styles.link} to='renal/2017'>2017</Link>
        <Link onClick={()=>props.update('2nd-year', 'renal', '2018')} className={styles.link} to='renal/2018'>2018</Link>
        <Link onClick={()=>props.update('2nd-year', 'renal', '2019')} className={styles.link} to='renal/2019'>2019</Link>
        <Link onClick={()=>props.update('2nd-year', 'renal', '2020')} className={styles.link} to='renal/2020'>2020</Link>
        <Link onClick={()=>props.update('2nd-year', 'renal', '2021')} className={styles.link} to='renal/2021'>2021</Link>
        <Link onClick={()=>props.update('2nd-year', 'renal', '2022')} className={styles.link} to='renal/2022'>2022</Link>
        <Link onClick={()=>props.update('2nd-year', 'renal', '2023')} className={styles.link} to='renal/2023'>2023</Link>
      </div>

      <div className={`${styles.modulewrapper} ${styles.reproductive}`}>
        <h3 className={styles.moduleheading}>Reproductive</h3>
        <hr />
        <Link onClick={()=>props.update('2nd-year', 'reproductive', '2016')} className={styles.link} to='reproductive/2016'>2016</Link>
        <Link onClick={()=>props.update('2nd-year', 'reproductive', '2017')} className={styles.link} to='reproductive/2017'>2017</Link>
        <Link onClick={()=>props.update('2nd-year', 'reproductive', '2018')} className={styles.link} to='reproductive/2018'>2018</Link>
        <Link onClick={()=>props.update('2nd-year', 'reproductive', '2019')} className={styles.link} to='reproductive/2019'>2019</Link>
        <Link onClick={()=>props.update('2nd-year', 'reproductive', '2020')} className={styles.link} to='reproductive/2020'>2020</Link>
        <Link onClick={()=>props.update('2nd-year', 'reproductive', '2021')} className={styles.link} to='reproductive/2021'>2021</Link>
        <Link onClick={()=>props.update('2nd-year', 'reproductive', '2022')} className={styles.link} to='reproductive/2022'>2022</Link>
        <Link onClick={()=>props.update('2nd-year', 'reproductive', '2023')} className={styles.link} to='reproductive/2023'>2023</Link>
      </div>
    </div>
    </>
  )
}