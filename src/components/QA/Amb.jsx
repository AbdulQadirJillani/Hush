import React, { useEffect, useState } from 'react'
import styles from './QA.module.css'
import { Link } from 'react-router-dom'

export default function Amb(props) {
    const qaArray = props.data
    const [index, setIndex] = useState(0)
    const [optionIndex, setOptionIndex] = useState(null)
    const [ansIndex, setAnsIndex] = useState(null)
    const [hintstate, setHintstate] = useState(false)
    const [score, setScore] = useState(0)
    const [lock, setLock] = useState(false)
    const [lockcounter, setLockCounter] = useState(0)
    const currentQA = qaArray[index]

    function decrement() {
        setIndex((prevIndex) => prevIndex - 1)
        setOptionIndex(null)
        setAnsIndex(null)
        setHintstate(false)
        setLock(true)
        setLockCounter(prevLockCounter => prevLockCounter - 1)
    }

    function increment() {
        setIndex((prevIndex) => prevIndex + 1)
        setOptionIndex(null)
        setAnsIndex(null)
        setHintstate(false)
        if (lockcounter < 0) setLockCounter(prevLockCounter => prevLockCounter + 1)
        if (lockcounter === 0) setLock(false)
        else setLock(true)
    }

    function checker(index, opt) {
        setOptionIndex(index)
        if (opt && !lock) {
            setScore(prevScore => prevScore + 1)
            setLock(true)
        }
    }

    function show() {
        for (let i=0; i<currentQA.answers.length; i++) {
            if (currentQA.answers[i].bool) {
                setAnsIndex(i)
            }
        }
    }

  return (
    <>
    <div className={styles.qawrapper}>

        <header className={styles.qainfo}>
            <p>
                {currentQA.info}
            </p>

            <p>
                {`${currentQA.id+1} out of ${qaArray.length}`}
            </p>
        </header>

        <hr />

        <main>
            <p 
            className={styles.question}>
                {currentQA.question}
            </p>

            <div className={styles.questionextra}>
                <button className={styles.hintbtn} onClick={() => setHintstate(true)}>Hint</button>
                <p>Difficulty: {currentQA.difficulty}</p>
            </div>
            <p className={hintstate ? styles.hintshow : styles.hinthide}>{currentQA.hint}</p>
            
            <hr />

            <ol>
                {
                currentQA.answers.sort((a, b)=>(b.option.length - a.option.length)).map((opt, index) => 
                <li
                key={index} 
                className={(index===optionIndex || index===ansIndex) ? 
                    ((opt.bool) ? styles.optionCorrect : styles.optionWrong) 
                    : styles.option}
                onClick={() => checker(index, opt.bool)}>
                    {opt.option}
                    <p className={(index===optionIndex || index===ansIndex) ?
                    styles.explanationshow : styles.explanationhide}>
                        {opt.explanation}
                    </p>
                </li>)
                }
            </ol>
            
            <button 
            onClick={show} 
            className={styles.showbtn}>
                Show Answer
            </button>
        </main>

        <footer className={styles.btnlayout}>
            <button 
            onClick={decrement} 
            disabled={currentQA.id===0} 
            className={currentQA.id===0 ? styles.disabledbtn : styles.btn}>
                Back
            </button>

            {
            (currentQA.id + 1 === qaArray.length) ? 
            <button 
            onClick={() => document.querySelector('dialog').showModal()} 
            className={styles.btn}>
                Finish
            </button> 
            : 
            <button 
            onClick={increment} 
            className={styles.btn}>
                Next
            </button>
            }
        </footer>
        
    </div>

    <dialog>
        <p>
            Score: {score} / {qaArray.length}
        </p>

        <button
        onClick={() => document.querySelector('dialog').close()}>
            <Link className={styles.homebtn} to='/'>Home</Link>
        </button>
    </dialog>
    </>
  )
}