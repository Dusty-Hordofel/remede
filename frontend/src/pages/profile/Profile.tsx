import React, { useEffect, useState } from 'react'
import AccountTransaction from '../../components/accountTransaction/AccountTransaction'
import styles from "./profile.module.scss"
import { useDispatch, useSelector } from 'react-redux'
import { StateProps } from '../../components/login/LoginForm'
import Welcome from '../../components/welcome/Welcome'
import EditNameForm from '../../components/editName/EditNameForm'
import { useNavigate } from 'react-router-dom'
const Profile = () => {



    const { firstName, lastName, token } = useSelector((state: StateProps) => state.auth)
    console.log("🚀 ~ file: LoginForm.tsx:30 ~ sto:", { lastName, firstName, token })

    const [editFirstName, setEditFistName] = useState(firstName)
    const [editLastName, setEditLastName] = useState(lastName)
    const [edit, setEdit] = useState(false)

    const navigate = useNavigate()

    useEffect(() => {
        if (!token) {
            navigate("/")
        }
    }, [])

    return (
        <div className={styles.profile}>
            <Welcome firstName={editFirstName} lastName={editLastName} />
            {edit && <EditNameForm firstName={editFirstName} lastName={editLastName} setEditFistName={setEditFistName} setEditLastName={setEditLastName} setEdit={setEdit} />}
            {!edit && <button className={styles.button} onClick={() => setEdit(true)}>Edit Name</button>}
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