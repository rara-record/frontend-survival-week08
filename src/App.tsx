import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { useReadLocalStorage } from 'usehooks-ts';
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';
import routes from './routes';
import defaultTheme from './styles/defaultTheme';
import darkTheme from './styles/darkTheme';
import GlobalStyle from './styles/GlobalStyle';

const router = createBrowserRouter(routes);

export default function App() {
  const isDarkMode = useReadLocalStorage('darkMode');

  const theme = isDarkMode ? darkTheme : defaultTheme;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Reset />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
