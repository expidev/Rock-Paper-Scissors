import React from 'react'
import HandSelection from '../components/HandSelection'
import styles from './ChooseAndPlay.module.css'

import { FaRegHandPaper, FaRegHandRock, FaRegHandScissors } from 'react-icons/fa'

function ChooseAndPlay() {
  return (
    <>
        <div className={styles.choiceBtnCtn}>
            <HandSelection name="rock" icon={<FaRegHandRock size={60} />} />
            <HandSelection name="paper" icon={<FaRegHandPaper size={60} />} />
            <HandSelection name="scissors" icon={<FaRegHandScissors size={60} />} />
        </div>
        <button className={styles.playBtn}>
            Play
        </button>
    </>
  )
}

export default ChooseAndPlay