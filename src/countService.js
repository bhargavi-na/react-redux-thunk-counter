let backEndCount = 0;

export const countService = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(++backEndCount);
    }, 1000);
  });
};
