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
 * Anninymus function type example
 */
const multiply = function(a: number, b: number): number {
  return a * b;
};
