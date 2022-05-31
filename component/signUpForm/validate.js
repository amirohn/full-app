export const validate = (content, type) => {
  const errors = {};

  if (!content.username.trim()) {
    errors.username = "please insert your username";
  } else {
    delete errors.username;
  }
  if (!content.email) {
    errors.email = "please insert your email";
  } else if (!/\S+@\S+\.\S+/.test(content.email)) {
    errors.email = "please enter a valid email address";
  } else {
    delete errors.email;
  }
  if (!content.passwordI) {
    errors.passwordI = "please insert your password";
  } else if (content.passwordI.length < 6) {
    errors.passwordI = "your password must be at lease 6 characters";
  } else {
    delete errors.passwordI;
  }
  if (!content.confirmPassword) {
    errors.confirmPassword = "please insert your password";
  } else if (content.confirmPassword != content.passwordI) {
    errors.confirmPassword = "Password is not matching";
  } else {
    delete errors.confirmPassword;
  }

  if (!content.isAccepted) {
    errors.isAccepted = "terms and conditions needs to be accepted";
  } else {
    delete errors.isAccepted;
  }
  if (type === "signUp") {
    content.username &&
    content.email &&
    content.passwordI.length > 6 &&
    content.confirmPassword &&
    content.isAccepted
      ? (errors.isValid = false)
      : (errors.isValid = true);
  } else {
    content.username && content.passwordI.length > 6
      ? (errors.isValid = false)
      : (errors.isValid = true);
  }
  return errors;
};
