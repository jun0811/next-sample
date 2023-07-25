import { NextPage } from "next";
import Link from "next/link";
import { styled, css } from "styled-components";

const blueFont = css`
  color: #1e90ff;
  font-size: 2em;
`;

const Title = styled.h2`
  margin: 1rem;
  ${blueFont}
`;

const BorderedTitle = styled(Title)`
  padding: 8px 16px;
  border: 2px solid blue;
  border-radius: 4px;
`;

interface BaseLinkProps {
  className?: string;
  children: React.ReactNode;
  href: string;
}

const BaseLink = (props: BaseLinkProps) => {
  const { className, children, href, ...rest } = props;
  return (
    <Link href={href} {...rest}>
      <div className={className}>{children}</div>
    </Link>
  );
};

const StyledLink = styled(BaseLink)`
  color: #1e90ff;
  font-size: ${(props) => props.theme.fontSize[3]};
`;

const Page: NextPage = () => {
  return (
    <div>
      <Title>Styled Component</Title>
      <BorderedTitle>상속</BorderedTitle>
      <StyledLink href="/">style link</StyledLink>
    </div>
  );
};

export default Page;
