import { render, screen } from "@testing-library/react";
import { Button } from "./Button";
import "@testing-library/jest-dom";

test("Testing if component appears on the screen", async () => {
  render(<Button />);

  const button = await screen.findByRole("button");

  expect(button).toBeInTheDocument();
});
