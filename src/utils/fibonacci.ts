export default function Fibonacci(start: number, end: number) {
  if (typeof start !== "number" || typeof end !== "number") {
    throw new Error("function paramaters must be number!");
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
