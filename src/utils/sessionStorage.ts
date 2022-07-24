export const putTokenInSessionStorage = (token: string) => {
  sessionStorage.setItem('token', token);
};

export const getTokenInSessionStorage = () => {
  return sessionStorage.getItem('token');
};
