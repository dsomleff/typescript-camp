/**
 * Functions always have a types for args and return values.
 * Try to remove returning type and return string instead
 */
const add = (a: number, b: number): number => {
  return a + b;
};

/**
 * Remove return key word from the func body
 */
const subtract = (a: number, b: number): number => {
   return a - b;
};

/**
 * Regular function type example
 */
function divide(a: number, b: number): number {
  return a / b;
}

/**
 * Anonymous function type example
 */
const multiply = function(a: number, b: number): number {
  return a * b;
};

/**
 * Void for functions that not return anything
 * Void support null and undefined as a return statement
 */
const logger = (message: string): void => {
    console.log(message);
};

/**
 * The { never } type contains no value.
 * The {never} type represents the return type of function
 * that always throws an error or a function that contains an
 * indefinite loop.
 */
function raiseError(message: string): never {
    throw new Error(message);
}
