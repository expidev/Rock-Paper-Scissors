import React from 'react'
import styles from './HandSelection.module.css'

interface Props {
    name: string,
    icon: JSX.Element
}

function HandSelection({ name, icon}: Props): JSX.Element {
  return (
    <>
        <button className={styles.choiceBtn}>{name}{icon}</button>
    </>
  )
}

export default HandSelection