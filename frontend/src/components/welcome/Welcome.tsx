import React from 'react'
import styles from "./welcome.module.scss"

interface WelcomeProps {
    firstName: string,
    lastName: string
}

const Welcome = ({ firstName, lastName }: WelcomeProps) => {
    return (

        <div className={styles.title}>
            <h1 >Welcome back <br /> {`${firstName} ${lastName}`} </h1>
        </div>

    )
}

export default Welcome