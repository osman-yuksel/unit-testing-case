export default function Fibonacci(start: number, end: number) {
  if (typeof start !== "number" || typeof end !== "number") {
    throw new Error("function parameters must be number!");
  }

  if (start > 110_000_000 || end > 110_000_000) {
    throw new Error("parameters bigger than 110_000_000 will cause crashes");
  }

  if (start < 0 || end < 0) {
    throw new Error("function parameters can not be negative!");
  }
  
  if (start - end > 0) {
    throw new Error("'end' can not be lower than 'start'!");
  }
  
  if (end > 1476) {
    console.warn("numbers after the 1476th will be Infinity!");
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
  return ans.slice(start === 0 ? 0 : start - 1);
}
