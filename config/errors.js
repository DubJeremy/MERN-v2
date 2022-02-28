exports.signUpErrors = (err) => {
    let errors = {firstName: '', lastName: '', email: '', password: ''};

    if (err.message.includes('firstName'))
        errors.firstName = "Prénom invalide";
        
    if (err.message.includes('lastName'))
        errors.lastName = "Nom invalide";

    if (err.message.includes('email'))
        errors.email = "Email invalide";

    if (err.message.includes('unique'))
        errors.email = "Cet email est déjà enregistré";

    if (err.message.includes('password'))
        errors.password = "Le mot de passe doit faire 6 caractère minimum";

    return errors;
}