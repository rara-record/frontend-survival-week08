import styled from 'styled-components';
import fontSize from '../styles/typography';

const Test = styled.div`
  font-size: ${fontSize.h1};
  color: ${({ theme }) => theme.colors.background_0};
`;

function PageIntro() {
  return (
    <Test>인트로페이지가 나와야하는데..</Test>
  );
}

export default PageIntro;
