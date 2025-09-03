import { render, screen } from "@testing-library/react";
import { describe, it, vi, expect } from "vitest";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


const mockMutate = vi.fn();
const mockToggleMutate = vi.fn();
vi.mock("../../services/todoApi", () => {
    return {
      getTodos: () => ({
        data: [{ id: 1, title: "Task 1" }],
        isLoading: false,
        isError: false,
      }),
      deleteTodo: () => ({ mutate: mockMutate }),
      toggleTodoItem: () => ({ mutate: mockToggleMutate }),
    };
});
import ListItemsTodo from "./ListItemsTodo";

import userEvent from "@testing-library/user-event";
describe("List-Items", () => {
    it("renders all", async () => {
        const queryClient = new QueryClient();
        
    render(
      <QueryClientProvider client={queryClient}>
        <ListItemsTodo />
      </QueryClientProvider>
    );

      expect(await screen.findByText("Task 1")).toBeInTheDocument();
      
    
    });
    it('cliced button', async () => {
       
        const queryClient = new QueryClient();
        render(
          <QueryClientProvider client={queryClient}>
            <ListItemsTodo />
          </QueryClientProvider>
        );

        expect(await screen.findByText("Delete")).toBeInTheDocument();
        const button = await screen.findByText("Delete")
        await userEvent.click(button);
        expect(mockMutate).toHaveBeenCalledTimes(1)
        const checkBoxBtn = await screen.findByRole("checkbox")
        await userEvent.click(checkBoxBtn);
        expect(mockToggleMutate).toHaveBeenCalledTimes(1);
       screen.debug()
    }
    )
});
