export const useRandomNumber = (min: number, max: number): number => {
  const range = max - min;
  const random = Math.random();
  return (min + Math.round(random * range));
};