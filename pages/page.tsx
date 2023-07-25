import { styled, css } from "styled-components";

const redBox = css`
  border: 1px solid #ff0000;
  padding: 0.25em 1em;
  border-radius: 10px;
`;

const blueFont = css`
  color: #1e90ff;
  font-size: 2em;
`;

const Title = styled.h2`
  margin: 1rem;
  ${blueFont}
`;

const Button = styled.button`
  background: transparent;
  margin: 1rem;
  cursor: pointer;
  ${redBox}
  ${blueFont}
`;
const Page = () => {
  return (
    <div>
      <Title> Styled Component</Title>
      <Button>Hello World</Button>
    </div>
  );
};

export default Page;
