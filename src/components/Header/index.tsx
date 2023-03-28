import styled from 'styled-components';
import { Link } from 'react-router-dom';
import fontSize from '../../styles/typography';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 26px;
  
  width: 100%;
  height: 180px;
  
  padding: 60px 36px;
  

`;

const StyledLogoImage = styled.img`
  width: 68px;
  height: 60px;
  
  cursor: pointer;
`;

const StyledTitle = styled.h2`
  font-size:${fontSize.h2};
`;

function Header() {
  return (
    <StyledHeader>
      <Link to="/">
        <StyledLogoImage src="/images/logo.png" alt="logo" />
      </Link>
      <StyledTitle>메가테라 푸드코트 키오스트</StyledTitle>
    </StyledHeader>
  );
}

export default Header;
