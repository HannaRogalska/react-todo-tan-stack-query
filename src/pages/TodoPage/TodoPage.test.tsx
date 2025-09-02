import TodoPage from "./TodoPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

describe("TodoPage", () => {
    it("render tex", () => {
         const queryClient = new QueryClient();
        render(
          <QueryClientProvider client={queryClient}>
            <TodoPage />
          </QueryClientProvider>
        );
        expect(screen.getByText("Your Todo")).toBeInTheDocument();
    })
})