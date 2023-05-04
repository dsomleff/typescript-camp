/**
 * Without returning type no error displayed
 */
const add = (a: number, b: number) => {
  return 'hello';
};

/**
 * Always specify type for return
 */
const subtract = (a: number, b: number): number => {
   a - b;
};
