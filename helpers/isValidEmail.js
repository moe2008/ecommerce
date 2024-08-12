export const isValidEmail = (email) => {
  // Eine einfache Überprüfung des E-Mail-Formats mit einer regulären Ausdruck
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
