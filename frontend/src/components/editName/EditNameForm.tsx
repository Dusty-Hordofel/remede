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



}
function EditNameForm({ firstName, lastName, setEditFistName, setEditLastName }: EditNameFormProps) {
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
        console.log("🚀 ~ file: EditNameForm.tsx:35 ~ onSubmit ~ updatedUser:", updatedUser)

        console.log(data); // Vous pouvez effectuer ici la logique d'envoi des données, par exemple, en utilisant une requête axios
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



// import React from 'react';
// import { useForm, SubmitHandler } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// // import { z } from 'zod';
// import { EditNameFormSchema, EditNameFormValues, LoginFormSchema, LoginFormValues } from '../../validators/schema-validator';
// import styles from './editNameForm.module.scss';
// import axios from "axios";
// // import { useDispatch, useSelector } from "react-redux";
// // import { login, userInfos } from '../../features/auth/authSlice';

// // type FormValues = {
// //     username: string;
// //     password: string;
// //     rememberMe: boolean;
// // };

// // const schema = z.object({
// //     username: z.string().nonempty('Le nom d\'utilisateur est requis.'),
// //     password: z.string().nonempty('Le mot de passe est requis.'),
// //     rememberMe: z.boolean(), // Add the rememberMe field in the Zod schema
// // });
// export interface StateProps {
//     token: string,
//     email: string,
//     password: string,
//     firstName: string,
//     lastName: string,
//     auth: any;
// }


// const EditNameForm: React.FC = () => {

//     const {
//         handleSubmit,
//         register,
//         formState: { errors },
//     } = useForm<EditNameFormValues>({
//         resolver: zodResolver(EditNameFormSchema),
//         // defaultValues: {
//         //     rememberMe: false,
//         // },
//     });

//     const onSubmit: SubmitHandler<EditNameFormValues> = async (data) => {
//         console.log("🚀 ~ file: EditNameForm.tsx:51 ~ constonSubmit:SubmitHandler<EditNameFormValues>= ~ data:", data)
//         // dispatch(login(data))
//     };

//     return (
//         <>
//             <div className={styles.form}>
//                 <form onSubmit={handleSubmit(onSubmit)}>
//                     <div className={styles.input}>
//                         <label>firstName</label>
//                         <input {...register('firstName')} />
//                         {errors.firstName && <p>{errors.firstName.message}</p>}
//                     </div>
//                     <div className={styles.input}>
//                         <label>lastName</label>
//                         <input {...register('lastName')} />
//                         {errors.lastName && <p>{errors.lastName.message}</p>}
//                     </div>

//                     {/* <div className={styles.input}>
//                         <label>lastName</label>
//                         <input type="lastName" {...register('lastName')} />
//                         {errors.lastName && <p>{errors.lastName.message}</p>}
//                     </div> */}
//                     <button type="submit">Modifier</button>
//                 </form>
//             </div>
//         </>
//     );
// };

// export default EditNameForm;
