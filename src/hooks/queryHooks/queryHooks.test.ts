import { describe, it, vi, expect, type Mock } from "vitest";
import { fetchTodos, removeTodo, toggleTodo } from "./queryHooks";
import type { Todo } from "../../types/todoType";

import axios from "axios";
vi.mock("axios");

describe("query hooks", () => {
  it("fetch todo", async () => {
    (axios.get as Mock).mockResolvedValue({
      data: [
        {
          userId: 1,
          id: 23,
          title: "some",
          completed: true,
        },
      ] as Todo[],
    });
    const data = await fetchTodos();

    expect(axios.get).toBeCalledTimes(1);
    expect(data).toEqual([
      {
        userId: 1,
        id: 23,
        title: "some",
        completed: true,
      },
    ]);
  });
  
    
});
