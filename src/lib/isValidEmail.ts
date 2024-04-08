export const isValidEmail = (email: string) => {
  const regex = /^[a-zA-Z0-9._%+-]+@(gmail|yahoo)\.com$/;
  return regex.test(email);
};
