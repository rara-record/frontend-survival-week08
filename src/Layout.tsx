import { Outlet } from 'react-router-dom';

import styled from 'styled-components';

import Header from './components/Header';

const Container = styled.div`
  margin: 0 auto;
  width: ${(props) => props.theme.sizes.layoutWidth};
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
