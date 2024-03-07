import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Pages.module.css'

export default function Amboss(props) {
  return (
  <div className={styles.ambosspage}>
    <Link className={styles.link} to='Behavioral Sciences' onClick={() => props.update(null, null, null, 'Behavioral Sciences')}>Behavioral Sciences</Link>
    <Link className={styles.link} to='Blood and Lymphoreticular System' onClick={() => props.update(null, null, null, 'Blood and Lymphoreticular System')}>Blood and Lymphoreticular System</Link>
    <Link className={styles.link} to='Cardiovascular System' onClick={() => props.update(null, null, null, 'Cardiovascular System')}>Cardiovascular System</Link>
    <Link className={styles.link} to='Endocrine System' onClick={() => props.update(null, null, null, 'Endocrine System')}>Endocrine System</Link>
    <Link className={styles.link} to='Female Reproductive System and Breast' onClick={() => props.update(null, null, null, 'Female Reproductive System and Breast')}>Female Reproductive System and Breast</Link>
    <Link className={styles.link} to='Gastrointestinal System' onClick={() => props.update(null, null, null, 'Gastrointestinal System')}>Gastrointestinal System</Link>
    <Link className={styles.link} to='Human Development' onClick={() => props.update(null, null, null, 'Human Development')}>Human Development</Link>
    <Link className={styles.link} to='Immune System' onClick={() => props.update(null, null, null, 'Immune System')}>Immune System</Link>
    <Link className={styles.link} to='Male Reproductive System' onClick={() => props.update(null, null, null, 'Male Reproductive System')}>Male Reproductive System</Link>
    <Link className={styles.link} to='Multisystem Processes and Disorders' onClick={() => props.update(null, null, null, 'Multisystem Processes and Disorders')}>Multisystem Processes and Disorders</Link>
    <Link className={styles.link} to='Musculoskeletal System' onClick={() => props.update(null, null, null, 'Musculoskeletal System')}>Musculoskeletal System</Link>
    <Link className={styles.link} to='Nervous System and Special Senses' onClick={() => props.update(null, null, null, 'Nervous System and Special Senses')}>Nervous System and Special Senses</Link>
    <Link className={styles.link} to='Pregnancy, Childbirth and Puerperium' onClick={() => props.update(null, null, null, 'Pregnancy, Childbirth and Puerperium')}>Pregnancy, Childbirth and Puerperium</Link>
    <Link className={styles.link} to='Renal and Urinary System' onClick={() => props.update(null, null, null, 'Renal and Urinary System')}>Renal and Urinary System</Link>
    <Link className={styles.link} to='Respiratory System' onClick={() => props.update(null, null, null, 'Respiratory System')}>Respiratory System</Link>
    <Link className={styles.link} to='Skin and Subcutaneous Tissue' onClick={() => props.update(null, null, null, 'Skin and Subcutaneous Tissue')}>Skin and Subcutaneous Tissue</Link>
    <Link className={styles.link} to='Social Sciences' onClick={() => props.update(null, null, null, 'Social Sciences')}>Social Sciences</Link>
    </div>
  )
}