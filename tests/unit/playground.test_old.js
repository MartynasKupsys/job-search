/**
 *  .test.js
 *  .spec.js
 *
 */
import { evenOrOdd, multiply } from "@/playground";

describe("basic math", () => {
  it("adds two numbers", () => {
    expect(1 + 1).toBe(2);
  });

  it("subtract two numbers", () => {
    expect(5 - 3).toBe(2);
  });

  describe("evenOrOdd", () => {
    describe("when the number is even", () => {
      it("indicates the number is even", () => {
        expect(evenOrOdd(4)).toBe("Even");
      });
    });

    describe("when the number is odd", () => {
      it("indicates the number is odd", () => {
        expect(evenOrOdd(3)).toBe("Odd");
      });
    });
  });

  describe("multiply", () => {
    it("multiplies two numbers together", () => {
      expect(multiply(2, 3)).toBe(6);
    });
  });
});
