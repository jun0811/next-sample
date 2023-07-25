import styled from "styled-components";

const Badge = styled.span`
  padding: 8px 16px;
  font-weight: bold;
  text-align: center;
  color: white;
  background: red;
  border-radius: 16px;
`;

interface ButtonProps {
  color: string;
  background: string;
}

const Button = styled.button<ButtonProps>`
  color: ${(props) => props.color};
  background: ${(props) => props.background};

  border: 2px solid ${(props) => props.color};

  margin: 1rem;
  font-size: 2rem;
  padding: 0.5rem 1rem;
`;

export default function Home() {
  return (
    <div className="main">
      <br />
      <Button color="red" background="white">
        Test Button
      </Button>
      <br />
      <Button color="skyblue" background="yellow">
        Test Button
      </Button>
    </div>
  );
}
