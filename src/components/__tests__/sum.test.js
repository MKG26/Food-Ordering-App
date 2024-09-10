import { sum } from "../sum";

test("Sum function should return sum of two numbers", () => {
  const result = sum(1, 2);

  expect(result).toBe(3);
});
