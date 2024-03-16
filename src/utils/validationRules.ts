export const validateFirstName = { required: "First name is required !" };

export const validateLastName = { required: "Last name is required !" };

export const validateEmail = {
  required: "Please enter a valid email address !",
  pattern: {
    value: /\S+@\S+\.\S+/,
    message: "Please enter a valid email address !",
  },
};

export const validatePassword = {
  required: "Please enter your password !",
  minLength: {
    value: 8,
    message: "Password must be at least eight characters !",
  },
};

export const confirmPasswordValidation = (value: number, password: number) => {
  if (value !== password) {
    return "Passwords do not match !";
  }
  return true;
};
