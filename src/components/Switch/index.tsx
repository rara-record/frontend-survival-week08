import styled, { css } from 'styled-components';
import { useLocalStorage } from 'usehooks-ts';
import fontSize from '../../styles/typography';

const StyledSwitch = styled.button.attrs({ type: 'button' })<{ active: boolean}>`
  display: flex;
  align-items: center;
  
  width: 20.8rem;
  height: 6.4rem;

  padding: 0.6rem 0.5rem;
  border-radius: 3rem;
  
  font-size:${fontSize.caption};
  
  color: #FFFFFF;
  background-color: #FFA454;
  cursor: pointer;
  
  span {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 10rem;
    height: 5rem;
    
 
  }
  
  span:first-of-type {
    color: #000;

    border-radius: 3rem;
    
    background-color: #fff;  
  }
  
  ${({ active, theme }) => active && css`
    background-color:  ${theme.colors.background_0};
    color: white;
    
    span:first-child  {
      background-color:  ${theme.colors.background_0};
      color:#fff;
    }

    span:last-child  {
      border-radius: 3em;
      color: #000000;
      background-color: #FFFFFF;
      transition: .1s;
    }
  `}
  
`;

function Switch() {
  const [isDarkMode, setDarkMode] = useLocalStorage('darkMode', false);

  return (
    <StyledSwitch onClick={() => setDarkMode(!isDarkMode)} active={isDarkMode}>
      <span>밝게 </span>
      <span>어둡게 </span>
    </StyledSwitch>

  );
}

export default Switch;
