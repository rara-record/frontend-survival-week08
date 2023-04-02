import { Outlet } from 'react-router-dom';

import styled from 'styled-components';

import Header from './components/Header';

const Container = styled.div`
  margin: 0 auto 50px;
  
  width: ${({ theme }) => theme.sizes.layoutWidth};
  background: ${({ theme }) => theme.colors.background_alpha};
`;

export default function Layout() {
  return (
    <Container>
      <Header />
      <main>
        <Outlet />
      </main>
    </Container>
  );
}
