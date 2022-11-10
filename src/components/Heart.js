import { useState } from 'react'
import styles from '/src/styles/Heart.module.css'

export default function Heart() {
    const [isFilled, setIsFilled] = useState(false)
    const toggleFill = () => {
        setIsFilled(!isFilled); 
    }
    return (
        <div className={`${styles.heart} ${isFilled ? styles.blast : ''}`} onClick={toggleFill}></div>	
    )
}
