import { z } from "zod";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

//Définission du schéma de validation avec Zod

export const LoginFormSchema = z.object({
  email: z
  .string()
  .nonempty({ message: "Veuillez fournir une adresse e-mail" })
  .regex(emailRegex, "Veuillez fournir une adresse e-mail valide")
  .email("Veuillez fournir une adresse e-mail valide")
  .trim()
  .toLowerCase(),
  password: z.string().nonempty("Veuillez fournir un mot de passe").min(6,  "Le mot de passe doit contenir au moins 6 caractères"),
  rememberMe: z.boolean(), 
  // rememberMe: z.boolean().optional(),
  // password: z
  // .string()
  // .min(8, "Le mot de passe doit contenir au moins 8 caractères")
  // .regex(
  //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
  //   "Le mot de passe doit contenir au moins une lettre minuscule, une lettre majuscule, un chiffre et un caractère spécial"
  // )
  // .nonempty({ message: "Veuillez fournir un mot de passe" }),
});


// type of the request
export type LoginFormValues = z.infer<typeof LoginFormSchema>;