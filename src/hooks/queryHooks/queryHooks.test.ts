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

  it("remove todo", async () => {
    (axios.delete as Mock).mockResolvedValue({});
    await removeTodo(1);
    expect(axios.delete).toBeCalledTimes(1);
    expect(axios.delete).toBeCalledWith(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
  });
    it('toggle', async() => {
        (axios.put as Mock).mockResolvedValue( {data: {
        userId: 1,
        id: 23,
        title: "some",
        completed: true,
      } } );
      const todo = {
        userId: 1,
        id: 23,
        title: "some",
        completed: false,
      };
        const toggledTodo = await toggleTodo({ ...todo } );
        
        expect(axios.put).toBeCalledTimes(1);
        expect(toggledTodo).toEqual({
          userId: 1,
          id: 23,
          title: "some",
          completed: true,
        });
        expect(axios.put).toBeCalledWith(
          `https://jsonplaceholder.typicode.com/todos/23`,
          {
            completed: !todo.completed,
          }
        );
    })
});
