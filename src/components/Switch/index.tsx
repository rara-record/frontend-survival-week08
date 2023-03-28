import styled from 'styled-components';

const StyledSwitch = styled.div``;

const StyledToggleButton = styled.div``;

function Switch() {
  return (
    <StyledSwitch>
      <StyledToggleButton>
        <span>밝게 </span>
        <span>어둡게 </span>
      </StyledToggleButton>
    </StyledSwitch>
  );
}

export default Switch;
