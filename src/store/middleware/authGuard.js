export const authGuard = (store) => (next) => (action) => {
  const returnedValue = next(action);
  return returnedValue;
};
