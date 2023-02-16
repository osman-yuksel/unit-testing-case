//@ts-nocheck
import { describe, expect, test } from "vitest";
import Fibonacci from "../src/utils/fibonacci";

describe("fibonacci", () => {
  test("initial test, returns an empty array", () => {
    expect(Fibonacci(0, 0)).eql([]);
  });

  test("'start' paramater type check", () => {
    expect(() => Fibonacci("abc", 0)).toThrowError();
  });

  test("'end' paramater type check 1", () => {
    expect(() => Fibonacci(0, "abc")).toThrowError();
  });
});