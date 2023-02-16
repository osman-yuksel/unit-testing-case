export default function Fibonacci(start: number, end: number) {
  if (typeof start !== "number" || typeof end !== "number") {
    throw new Error("function parameters must be number!");
  }

  if (start === Infinity || end === Infinity) {
    throw new Error("function parameters can't be Infinity!");
  }

  if (end > 1476) {
    console.warn("numbers after the 1476th will be Infinity!");
  }

  if (start < 1 || end < 1) {
    throw new Error("function parameters must be greater than 0!");
  }

  if (start - end > 0) {
    throw new Error("'end' can't be lower than 'start'!");
  }

  const ans: number[] = [];
  let n1 = 1,
    n2 = 1,
    nextN: number;

  for (let i = 1; i <= end; i++) {
    ans.push(n1);
    nextN = n1 + n2;
    n1 = n2;
    n2 = nextN;
  }
  return ans.slice(start - 1);
}
