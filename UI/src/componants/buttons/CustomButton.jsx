import React from 'react'
import styles from './CustomButton.module.css';

const CustomButton = (prop) => {
    const { className, onClick, btnContent } = prop;
    return (
        <button onClick={onClick} className={`${styles.button} ${className}`}>
            {btnContent}
        </button>
    )
}
export default CustomButton;