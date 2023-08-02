import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
// import { z } from 'zod';
import { LoginFormSchema, LoginFormValues } from '../../validators/schema-validator';
import styles from './loginForm.module.scss';
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { login, userInfos } from '../../features/auth/authSlice';

// type FormValues = {
//     username: string;
//     password: string;
//     rememberMe: boolean;
// };

// const schema = z.object({
//     username: z.string().nonempty('Le nom d\'utilisateur est requis.'),
//     password: z.string().nonempty('Le mot de passe est requis.'),
//     rememberMe: z.boolean(), // Add the rememberMe field in the Zod schema
// });
export interface StateProps {
    token: string,
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    auth: any;
}


const LoginForm: React.FC = () => {

    const { firstName, lastName, token } = useSelector((state: StateProps) => state.auth)
    console.log("🚀 ~ file: LoginForm.tsx:30 ~ sto:", { lastName, firstName, token })
    const dispatch = useDispatch();


    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<LoginFormValues>({
        resolver: zodResolver(LoginFormSchema),
        defaultValues: {
            rememberMe: false,
        },
    });

    const onSubmit: SubmitHandler<LoginFormValues> = async (data) => {
        dispatch(login(data))
    };

    return (
        <div className={styles.form}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.input}>
                    <label>Nom d'utilisateur</label>
                    <input {...register('email')} />
                    {errors.email && <p>{errors.email.message}</p>}
                </div>

                <div className={styles.input}>
                    <label>Mot de passe</label>
                    <input type="password" {...register('password')} />
                    {errors.password && <p>{errors.password.message}</p>}
                </div>

                <div className={styles.souvenir}>
                    <input type="checkbox" {...register('rememberMe')} id="check" />
                    <label htmlFor='check'>
                        Se souvenir de moi
                    </label>
                </div>

                <button type="submit">Se connecter</button>
            </form>
        </div>
    );
};

export default LoginForm;


// import React from 'react';
// import { useForm, Controller } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { LoginFormValues, loginFormSchema } from '../../validators/schema-validator';
// import styles from './loginForm.module.scss';
// import { BiCheckbox } from 'react-icons/bi';

// const LoginForm: React.FC = () => {
//     const {
//         control,
//         handleSubmit,
//         formState: { errors },
//     } = useForm<LoginFormValues>({
//         resolver: zodResolver(loginFormSchema),
//     });

//     const onSubmit = (data: LoginFormValues) => {
//         // Vous pouvez gérer la logique de connexion ici
//         console.log(data);
//     };

//     return (
//         <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
//             <div>
//                 <label>Email</label>
//                 <Controller
//                     name="email"
//                     control={control}
//                     defaultValue=""
//                     render={({ field }) => (
//                         <input
//                             type="text"
//                             {...field}
//                         />
//                     )}
//                 />
//                 {errors.email && <p>{errors.email.message}</p>}
//             </div>

//             <div>
//                 <label>Password</label>
//                 <Controller
//                     name="password"
//                     control={control}
//                     defaultValue=""
//                     render={({ field }) => (
//                         <input
//                             type="password"
//                             {...field}
//                         />
//                     )}
//                 />
//                 {errors.password && <p>{errors.password.message}</p>}
//             </div>

//             <div>
//                 {/* <label > */}
//                 <Controller
//                     name="rememberMe"
//                     control={control}
//                     defaultValue={false}
//                     render={({ field }) => (
//                         <input
//                             type="checkbox"
//                             {...field}
//                             onChange={(e) => field.onChange(e.target.checked)}
//                         />
//                     )}
//                 />

//                 <label>Remember Me</label>
//                 {/* </label> */}
//                 {errors.rememberMe && <p>Remember Me is required</p>}
//             </div>

//             <button type="submit">Login</button>
//         </form>
//     );
// };

// export default LoginForm;
