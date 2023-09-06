import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("localhost:5173");
});

test.describe("Home", () => {
  test("should show test from api", async ({ page }) => {
    await expect(page.getByTestId("result")).toHaveText("Hello World!");
  });
});
