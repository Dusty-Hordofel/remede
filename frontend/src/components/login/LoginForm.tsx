import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';//useForm est un hook qui permet de gérer les formulaires dans React, SubmitHandler est un type qui permet de typer la fonction onSubmit
import { zodResolver } from '@hookform/resolvers/zod'; //importer zodResolver pour valider les données du formulaire
import { LoginFormSchema, LoginFormValues } from '../../validators/schema-validator';//importer le schéma de validation
import styles from './loginForm.module.scss';
import { useDispatch, useSelector } from "react-redux";//useDispatch et useSelector sont importés depuis react-redux pour interagir avec le store Redux.
import { login } from '../../features/auth/authSlice';//importer l'action login
//zod est une bibliothèque de validation de schéma de données

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
} //interface StateProps est utilisée pour définir le type des données du state


const LoginForm: React.FC = () => {

    const { firstName, lastName, token } = useSelector((state: StateProps) => state.auth)//récupérer les données du state grace à useSelector qui prend en paramètre le state et retourne les données du state auth dans l'objet state qui se trouve dans le store
    console.log("🚀 ~ file: LoginForm.tsx:30 ~ sto:", { lastName, firstName, token })
    const dispatch = useDispatch();//dispatch permet d'envoyer une action au store ou de déclencher une action dans le store


    const {
        handleSubmit,//handleSubmit est une fonction qui permet de gérer la soumission du formulaire
        register,//register est une fonction qui permet d'enregistrer les champs du formulaire
        formState: { errors },//errors est un objet qui contient les erreurs de validation
    } = useForm<LoginFormValues>({
        resolver: zodResolver(LoginFormSchema),
        defaultValues: {
            rememberMe: false,
        },//defaultValues permet de définir les valeurs par défaut des champs du formulaire
    });//utiliser le hook useForm pour gérer le formulaire

    const onSubmit: SubmitHandler<LoginFormValues> = async (data) => {
        console.log("🚀 ~ file: LoginForm.tsx:51 ~ constonSubmit:SubmitHandler<LoginFormValues>= ~ data:", data)
        dispatch(login(data))//dispatch permet d'envoyer une action au store ou de déclencher une action dans le store
    };//onSubmit est une fonction qui permet de gérer la soumission du formulaire

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

