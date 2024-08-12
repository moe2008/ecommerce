export const checkInput = (firstName, lastName, email, message) => {
  if (firstName && lastName && email && message) {
    return true;
  }
  return false;
};
