import styled, { css } from 'styled-components';
import { useLocalStorage } from 'usehooks-ts';
import fontSize from '../../styles/typography';

const StyledSwitch = styled.div``;

const StyledToggleButton = styled.button.attrs({ type: 'button' })<{ active: boolean}>`
  padding: 2rem 1rem;
  font-size:${fontSize.caption};

  border-radius: 2em;
  color: #FFFFFF;
  background-color: #FFA454;
  cursor: pointer;
  
  span:first-of-type {
    padding: 15px 32px;
    border-radius: 25px;
    color: #000000;
    background-color: #FFFFFF;
    transition: .1s;
  }
  
  span:last-of-type {
    padding: .7em 1.5em;
    border-radius: 3em;
    transition: .1s;
  }
  
  ${({ active, theme }) => active && css`
    background-color:  ${theme.colors.background_0};
    color: white;
    
      span:first-child  {
        background-color:  ${theme.colors.background_0};
        color:#fff;
      }

    span:last-child  {
      padding: .7em 1.5em;
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
    <StyledSwitch>
      <StyledToggleButton onClick={() => setDarkMode(!isDarkMode)} active={isDarkMode}>
        <span>밝게 </span>
        <span>어둡게 </span>
      </StyledToggleButton>
    </StyledSwitch>
  );
}

export default Switch;
