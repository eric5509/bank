export const variant = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: (num: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: num * 0.1,
    },
  }),
};


export const variant1 = {
  initial: {
    opacity: 0,
  },
  animate: () => ({
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.05,
    },
  }),
};
