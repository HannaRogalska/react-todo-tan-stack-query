import { describe, it, expect } from "vitest";
import { screen, render } from "@testing-library/react";
import InputTodo from "./InputTodo";
import userEvent from "@testing-library/user-event"
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

describe("Input-Todo", () => {
    it("renders input and button", () => {
        const queryClient = new QueryClient();
        render(
            <QueryClientProvider client={queryClient}>
                <InputTodo />
            </QueryClientProvider>
        );
        expect(screen.getByRole("textbox")).toBeInTheDocument();
        expect(screen.getByRole("button")).toBeInTheDocument();
    });
    it("allows typing and submitting", async () => {
        const queryClient = new QueryClient();
        render(
          <QueryClientProvider client={queryClient}>
            <InputTodo />
          </QueryClientProvider>
        );
        const input = screen.getByRole("textbox");
        const button = screen.getByRole("button");

        await userEvent.type(input, "test");
        
        expect(input).toHaveValue("test")
        await userEvent.click(button);
         expect(input).toHaveValue("");
       screen.debug()
    })
    it("snapShot", () => {
        const queryClient = new QueryClient();
        const { container } = render(
            
          <QueryClientProvider client={queryClient}>
            <InputTodo />
          </QueryClientProvider>
        );
        expect(container).toMatchSnapshot()
    })
});
