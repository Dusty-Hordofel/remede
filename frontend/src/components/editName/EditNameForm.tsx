import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './editNameForm.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { StateProps } from '../login/LoginForm';
import { updateUserName } from "../../features/auth/authSlice.js"
// import { login } from '../../features/auth/authSlice'

interface EditNameFormProps {
    firstName: string,
    lastName: string,
    setEditFistName: React.Dispatch<React.SetStateAction<string>>;
    setEditLastName: React.Dispatch<React.SetStateAction<string>>;
    setEdit: React.Dispatch<React.SetStateAction<boolean>>



}
function EditNameForm({ firstName, lastName, setEditFistName, setEditLastName, setEdit }: EditNameFormProps) {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();

    const { token } = useSelector((state: StateProps) => state.auth)
    const dispatch = useDispatch()


    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setEditLastName(value);
        // setValue(name, value);
    };

    const onSubmit = (data: any) => {
        setEditLastName(data.lastName)
        const updatedUser = { token, lastName, firstName }
        dispatch(updateUserName(updatedUser))
        setEdit(false)
        // console.log("🚀 ~ file: EditNameForm.tsx:35 ~ onSubmit ~ updatedUser:", updatedUser)

        // console.log(data); // Vous pouvez effectuer ici la logique d'envoi des données, par exemple, en utilisant une requête axios
    };

    React.useEffect(() => {
        setValue('firstName', firstName);
        setValue('lastName', lastName);
    }, [setValue]);

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                {/* <div>
                    <label htmlFor="firstName">Prénom :</label>
                    <input
                        type="text"
                        id="firstName"
                        {...register('firstName', {
                            required: true,
                            minLength: 2,
                            pattern: /^[A-Za-z\s]*$/,
                        })}
                    />
                    {errors.firstName && (
                        <p style={{ color: 'red' }}>
                            {errors.firstName.type === 'required' && 'Le prénom est requis'}
                            {errors.firstName.type === 'minLength' && 'Le prénom doit comporter au moins 2 caractères'}
                            {errors.firstName.type === 'pattern' && 'Le prénom ne doit pas contenir de symboles'}
                        </p>
                    )}
                </div> */}
                <div className={styles.name}>
                    <div className={styles.input}>
                        <label htmlFor="lastName">lastName:</label>
                        <div className={styles.inputGroup}>
                            <input
                                type="text"
                                id="lastName"
                                {...register('lastName', {
                                    required: true,
                                    minLength: 2,
                                    pattern: /^[A-Za-z\s]*$/,
                                })}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>

                    <button type="submit">Save</button>
                </div>
                {errors.lastName && (
                    <p style={{ color: 'red' }}>
                        {errors.lastName.type === 'required' && 'Le nom de famille est requis'}
                        {errors.lastName.type === 'minLength' && 'Le nom de famille doit comporter au moins 2 caractères'}
                        {errors.lastName.type === 'pattern' && 'Le nom de famille ne doit pas contenir de symboles'}
                    </p>
                )}
            </form>
        </div>
    );
}

export default EditNameForm;

