import React, { useEffect, useState } from 'react'
import AccountTransaction from '../../components/accountTransaction/AccountTransaction'
import styles from "./profile.module.scss"
import { useDispatch, useSelector } from 'react-redux'
import { StateProps } from '../../components/login/LoginForm'
import Welcome from '../../components/welcome/Welcome'
import EditNameForm from '../../components/editName/EditNameForm'
import { useNavigate } from 'react-router-dom';
import { Helmet } from "react-helmet"
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
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content="Argent Bank Home Page" />
                <meta name="keywords" content="argent, bank, home, page" />
                <meta name="author" content="Argent Bank" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="robots" content="index, follow" />
                <title>Argent Bank Profile Page</title>
                <link rel="canonical" href="http://localhost:5173/profile" />
            </Helmet>
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
        </>
    )
}

export default Profile