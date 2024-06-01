// Usuario de Prueba Existente
  const userTest = { userName:'Antonio' , password:'contra123'}

// Función de utilidad para validar si una cadena está vacía o contiene solo espacios en blanco
const isEmptyOrWhitespace = (value) => {

  if(!value) return true

  return value.trim().length === 0;
};

// Reglas de validación para SignIn
const signInValidationRules = {
  userName: {
    required: true,
    errorMessage: 'El nombre de usuario es requerido',
  },
  password: {
    required: true,
    errorMessage: 'La contraseña es requerida',
  },
  signIn: {
    condition: (userInput) => userInput.userName !== userTest.userName || userInput.password !== userTest.password,
    errorMessage: 'Credenciales incorrectas',
  },
};

// Reglas de validación para SignUp
const signUpValidationRules = {
  userName: {
    required: true,
    maxLength: 15,
    errorMessage: 'El nombre de usuario es requerido y no puede exceder los 15 caracteres',
  },
  email: {
    required: true,
    errorMessage: 'El correo electrónico es requerido',
  },
  password: {
    required: true,
    minLength: 6,
    errorMessage: 'La contraseña es requerida y debe tener al menos 6 caracteres',
  },
};


// Función de validación genérica
const validate = (userInput, validationRules) => {
  // Arreglo de Errores
  const errors = {};

  for (const field in validationRules) {

    const fieldRules = validationRules[ field ]; //Reglas de cada field
    const value = userInput[ field ]; //valor de cada Input

    if (fieldRules.required && isEmptyOrWhitespace(value)) { 
      errors[field] = fieldRules.errorMessage;
    } else if (fieldRules.maxLength && value.length > fieldRules.maxLength) {
      errors[field] = fieldRules.errorMessage;
    } else if (fieldRules.minLength && value.length < fieldRules.minLength) {
      errors[field] = fieldRules.errorMessage;
    } else if (fieldRules.condition && fieldRules.condition(userInput)) {
      errors.password = fieldRules.errorMessage;
    }
  }

  return errors;
};


// Función de validación para SignIn
export const validateSignIn = (userInput) => {
  console.log(userInput);
  return validate(userInput, signInValidationRules);
};

// Función de validación para SignUp
export const validateSignUp = (userInput) => {
  return validate(userInput, signUpValidationRules);
};