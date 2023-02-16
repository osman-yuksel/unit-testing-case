import { describe, expect, test, vi } from "vitest";
import Fibonacci from "../src/utils/fibonacci";

describe("fibonacci - parameter validation", () => {
  test("paramater types", () => {
    // @ts-expect-error
    expect(() => Fibonacci("abc", 0)).toThrowError("function parameters must be number!");
    // @ts-expect-error
    expect(() => Fibonacci(0, "abc")).toThrowError("function parameters must be number!");
  });

  test("positive parameter", () => {
    expect(() => Fibonacci(4, 0)).toThrowError("function parameters must be greater than 0!");
    expect(() => Fibonacci(-2, 11)).toThrowError("function parameters must be greater than 0!");
  });

  test("numbers that cause runtime crashes", () => {
    expect(() => Fibonacci(4, Infinity)).toThrowError(
      "parameters bigger than 110_000_000 will cause crashes"
    );
    expect(() => Fibonacci(1, 500_000_000)).toThrowError(
      "parameters bigger than 110_000_000 will cause crashes"
    );
  });

  test("checks if 'end' >= 'start'?", () => {
    expect(Fibonacci(4, 4)).toBeTruthy();
    expect(() => Fibonacci(5, 2)).toThrowError("'end' can't be lower than 'start'!");
  });
});

describe("fibonacci - functionality", () => {
  test("initial test, returns [1]", () => {
    expect(Fibonacci(1, 1)).eql([1]);
  });

  test("calculation test 1", () => {
    expect(Fibonacci(3, 5)).eql([2, 3, 5]);
  });

  test("calculation test 2", () => {
    expect(Fibonacci(1, 10)).eql([1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
  });

  test("calculation test 3", () => {
    expect(Fibonacci(500, 500)).eql([1.394232245616977e104]);
  });

  test("Number.MAX_VALUE", () => {
    const spy = vi.spyOn(console, "warn");
    Fibonacci(2, 1477);
    expect(spy).toHaveBeenCalledWith("numbers after the 1476th will be Infinity!");
  });
});
