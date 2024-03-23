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
    value: 6,
    message: "Password must be at least eight characters !",
  },
};

export const confirmPassword = (value: number, confirm: number) => {
  if (value !== confirm) {
    return "Passwords do not match !";
  }
  return true;
};

export const confirmPasswordValidation = (value: number, password: number) => {
  if (value !== password) {
    return "Passwords do not match !";
  }
  return true;
};
