import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Reset } from 'styled-reset';
import { ThemeProvider } from 'styled-components';
import routes from './routes';

import GlobalStyle from './styles/GlobalStyle';
import defaultTheme from './styles/defaultTheme';

const router = createBrowserRouter(routes);

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Reset />
      <GlobalStyle />
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </ThemeProvider>

  );
}
