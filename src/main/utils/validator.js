export const isValidName = (name) => {
  return !(!name || name === "" || name.length === 0);
};

export const isValidEmail = (email) => {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
};
