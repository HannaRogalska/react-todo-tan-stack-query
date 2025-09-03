import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import Form from "./Form";
import { store } from "../../store/appStore";
import { Provider } from "react-redux";

describe("Form", () => {
  it("renders all fields", () => {
    render(
      <Provider store={store}>
        <Form />
      </Provider>
    );
    expect(screen.getByText("First Name")).toBeInTheDocument();
    expect(screen.getByText("Gender Selection")).toBeInTheDocument();
    expect(screen.getByText("Your Feedback")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
    it("submits form with values", async () => {
        render(
          <Provider store={store}>
            <Form />
          </Provider>
        );
        const button = screen.getByRole("button");
        const firstName = screen.getByText("First Name");
        const gender = screen.getByLabelText("Gender Selection");
        const opinion = screen.getByLabelText("Your Feedback");
        await userEvent.type(firstName, "Hanna");
        await userEvent.click(button);
        await userEvent.selectOptions(gender, "female");
        await userEvent.type(opinion, "The best!!");
        screen.debug(gender);
    });
});
