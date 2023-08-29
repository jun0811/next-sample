import {
  RenderResult,
  fireEvent,
  render,
  screen,
  waitFor,
  act,
} from "@testing-library/react";
import DelayInput from ".";
import userEvent from "@testing-library/user-event";
describe("DelayInput", () => {
  let renderResult: RenderResult;

  let handleChange: jest.Mock;

  beforeEach(() => {
    handleChange = jest.fn();
    renderResult = render(<DelayInput onChange={handleChange} />);
  });

  afterEach(() => {
    renderResult.unmount();
    // jest.useFakeTimers();
  });

  it("Span 요소 비어있음을 확인", () => {
    const spanNode = screen.getByTestId("display-text");
    expect(spanNode).toHaveTextContent("입력한 텍스트:");
  });

  it("입력 중... 텍스트 확인", () => {
    const spanNode = screen.getByTestId("display-text");
    const inputText = "Test";
    const inputNode = screen.getByTestId("input-text");

    userEvent.type(inputNode, inputText);

    waitFor(() => expect(spanNode).toHaveTextContent("입력중..."));
  });

  it("입력한 텍스트 반영 테스트", async () => {
    const inputText = "Test";
    const inputNode = screen.getByTestId("input-text");

    userEvent.type(inputNode, inputText);

    waitFor(() => {
      const spanNode = screen.getByTestId("display-text");
      expect(spanNode).toHaveTextContent(`입력한 텍스트: ${inputText}`);
    });
  });

  it("1초 후 handleChange 호출 테스트", async () => {
    const inputText = "Test";
    const inputNode = screen.getByTestId("input-text");

    userEvent.type(inputNode, inputText);

    waitFor(() => {
      expect(handleChange).toHaveBeenCalled();
    });
  });
});
