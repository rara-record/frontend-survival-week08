import styled from 'styled-components';
import fontSize from '../styles/typography';

const Test = styled.div`
  font-size: ${fontSize.h1};
  color: ${({ theme }) => theme.colors.background_0};
`;

function IntroPage() {
  return (
    <Test>dasdddddd</Test>
  );
}

export default IntroPage;
