import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Pages.module.css'

export default function Amboss(props) {
  return (
  <div className={styles.ambosspage}>
    <Link className={styles.link} to='Behavioral Sciences' onClick={() => props.update('Behavioral Sciences')}>Behavioral Sciences</Link>
    <Link className={styles.link} to='Blood and Lymphoreticular System' onClick={() => props.update('Blood and Lymphoreticular System')}>Blood and Lymphoreticular System</Link>
    <Link className={styles.link} to='Cardiovascular System' onClick={() => props.update('Cardiovascular System')}>Cardiovascular System</Link>
    <Link className={styles.link} to='Endocrine System' onClick={() => props.update('Endocrine System')}>Endocrine System</Link>
    <Link className={styles.link} to='Female Reproductive System and Breast' onClick={() => props.update('Female Reproductive System and Breast')}>Female Reproductive System and Breast</Link>
    <Link className={styles.link} to='Gastrointestinal System' onClick={() => props.update('Gastrointestinal System')}>Gastrointestinal System</Link>
    <Link className={styles.link} to='Human Development' onClick={() => props.update('Human Development')}>Human Development</Link>
    <Link className={styles.link} to='Immune System' onClick={() => props.update('Immune System')}>Immune System</Link>
    <Link className={styles.link} to='Male Reproductive System' onClick={() => props.update('Male Reproductive System')}>Male Reproductive System</Link>
    <Link className={styles.link} to='Multisystem Processes and Disorders' onClick={() => props.update('Multisystem Processes and Disorders')}>Multisystem Processes and Disorders</Link>
    <Link className={styles.link} to='Musculoskeletal System' onClick={() => props.update('Musculoskeletal System')}>Musculoskeletal System</Link>
    <Link className={styles.link} to='Nervous System and Special Senses' onClick={() => props.update('Nervous System and Special Senses')}>Nervous System and Special Senses</Link>
    <Link className={styles.link} to='Pregnancy, Childbirth and Puerperium' onClick={() => props.update('Pregnancy, Childbirth and Puerperium')}>Pregnancy, Childbirth and Puerperium</Link>
    <Link className={styles.link} to='Renal and Urinary System' onClick={() => props.update('Renal and Urinary System')}>Renal and Urinary System</Link>
    <Link className={styles.link} to='Respiratory System' onClick={() => props.update('Respiratory System')}>Respiratory System</Link>
    <Link className={styles.link} to='Skin and Subcutaneous Tissue' onClick={() => props.update('Skin and Subcutaneous Tissue')}>Skin and Subcutaneous Tissue</Link>
    <Link className={styles.link} to='Social Sciences' onClick={() => props.update('Social Sciences')}>Social Sciences</Link>
    </div>
  )
}