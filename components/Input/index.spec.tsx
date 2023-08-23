import { render, screen, RenderResult, waitFor } from "@testing-library/react";
import Input from "./index";
import userEvent from "@testing-library/user-event";

describe("input", () => {
  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(<Input id="username" label="username" />);
  });

  afterEach(() => {
    renderResult.unmount();
  });

  it("should empty in input on initial render", () => {
    const inputNode = screen.getByLabelText("username") as HTMLInputElement;
    expect(inputNode).toHaveValue("");
  });

  it("shold show input text", () => {
    const inputText = "Test Input Text";
    const inputNode = screen.getByLabelText("username") as HTMLInputElement;

    userEvent.type(inputNode, inputText);
    waitFor(() => expect(inputNode).toHaveValue(inputText));
  });

  it("shold reset when user clicks button", () => {
    const inputText = "Test Input Text";
    const inputNode = screen.getByLabelText("username") as HTMLInputElement;

    userEvent.type(inputNode, inputText);

    const buttonNode = screen.getByRole("button", {
      name: "Reset",
    });
    userEvent.click(buttonNode);

    expect(inputNode).toHaveValue("");
  });
});
