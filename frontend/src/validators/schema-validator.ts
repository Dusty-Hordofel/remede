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
});

export const EditNameFormSchema = z.object({
  firstName: z.string().min(2, "Le prénom doit comporter au moins 2 caractères").regex(/^[A-Za-z\s]*$/, "Le prénom ne doit pas contenir de symboles"),
  lastName: z.string().min(2, "Le nom de famille doit comporter au moins 2 caractères").regex(/^[A-Za-z\s]*$/, "Le nom de famille ne doit pas contenir de symboles"),
});




// type of the request
export type LoginFormValues = z.infer<typeof LoginFormSchema>;
export type EditNameFormValues = z.infer<typeof EditNameFormSchema>