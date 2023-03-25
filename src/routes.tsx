import Layout from './Layout';
import PageIntro from './pages/PageIntro';
import PageOrder from './pages/PageOrder';

const routes = [
  {
    element: <Layout />,
    children: [
      { path: '/', element: <PageIntro /> },
      { path: '/restaurants', element: <PageOrder /> },

    ],
  },
];

export default routes;
