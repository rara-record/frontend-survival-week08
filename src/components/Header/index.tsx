import styled from 'styled-components';
import { Link } from 'react-router-dom';
import fontSize from '../../styles/typography';
import Switch from '../Switch';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
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

const StyledFlex = styled.div`
  display: flex;
`;

const StyledTitle = styled.h1`
  font-size:${fontSize.h1};
  font-weight: 700;
`;

function Header() {
  return (
    <StyledHeader>
      <StyledFlex>
        <Link to="/">
          <StyledLogoImage src="/images/logo.png" alt="logo" />
        </Link>
        <StyledTitle>푸드코트 키오스트</StyledTitle>
      </StyledFlex>
      <Switch />
    </StyledHeader>
  );
}

export default Header;
