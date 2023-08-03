import React, { useState } from 'react'
import AccountTransaction from '../../components/accountTransaction/AccountTransaction'
import styles from "./profile.module.scss"
import { useDispatch, useSelector } from 'react-redux'
import { StateProps } from '../../components/login/LoginForm'
import Welcome from '../../components/welcome/Welcome'
const Profile = () => {
    const [edit, setEdit] = useState(false)


    const { firstName, lastName, token } = useSelector((state: StateProps) => state.auth)
    console.log("🚀 ~ file: LoginForm.tsx:30 ~ sto:", { lastName, firstName, token })
    // const dispatch = useDispatch();

    return (
        <div className={styles.profile}>
            <Welcome firstName={firstName} lastName={lastName} />
            <button className={styles.button}>Edit Name</button>
            <AccountTransaction accountTitle="Argent Bank Checking (x8349)" accountAmount="$2,082.79" accountAmountDescription="Available Balance" />
            <AccountTransaction accountTitle="Argent Bank Savings (x6712)"
                accountAmount="$10,928.42" accountAmountDescription="Available Balance" />
            <AccountTransaction accountTitle="Argent Bank Credit Card (x8349)"
                accountAmount="$184.30"
                accountAmountDescription="Current Balance" />
        </div>
    )
}

export default Profile