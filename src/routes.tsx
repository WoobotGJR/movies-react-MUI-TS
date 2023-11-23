import { createBrowserRouter } from 'react-router-dom';
import { Home, TvSeries, Movie, Bookmark, Error } from './pages/index';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: '/tv-series',
    element: <TvSeries />,
    errorElement: <Error />,
  },
  {
    path: '/movies',
    element: <Movie />,
    errorElement: <Error />,
  },
  {
    path: '/bookmark',
    element: <Bookmark />,
    errorElement: <Error />,
  },
]);

export { router };
