import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import SharedLayout from "./SharedLayout";

describe("Shared", () => {
    it("renders", () => {
        const { container } = render(<SharedLayout />)
        const header = screen.getByRole("banner");
        expect(header).toBeInTheDocument()
        const main = screen.getByRole("main");
        expect(main).toBeInTheDocument();
        const footer = screen.getByRole("contentinfo");
        expect(footer).toBeInTheDocument();
        expect(container).toMatchSnapshot()
    })
})

