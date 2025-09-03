import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import FormPage from "./FormPage";
import { store } from "../../store/appStore";
import { Provider } from "react-redux";

describe("Form Page", () => {
  it("renders text", () => {
    render(
      <Provider store={store}>
        <FormPage />
      </Provider>
    );

    expect(screen.getByText("Give us your opinion")).toBeInTheDocument();

    screen.debug();
  });
  it("render form", () => {
    render(
      <Provider store={store}>
        <FormPage />
      </Provider>
    );
    expect(
      screen.getByRole("form", { name: /feedback form/i })
    ).toBeInTheDocument();
  });
});
