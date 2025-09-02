import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import HomePage from "./HomePage";

describe("HomePage", () => {
  it("render text", () => {
      render(<HomePage />);
    expect(screen.getByText("home")).toBeInTheDocument();
  });
  it("matcher snapshot", () => {
      const { container } = render(<HomePage />);
    expect(container).toMatchSnapshot();
  });
});
