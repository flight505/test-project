import { formatDate, capitalize } from "../src/utils/helpers";

describe("helpers", () => {
  test("formatDate formats date correctly", () => {
    const date = new Date("2024-03-15");
    expect(formatDate(date)).toBe("March 15, 2024");
  });

  test("capitalize capitalizes first letter", () => {
    expect(capitalize("hello")).toBe("Hello");
  });
});
