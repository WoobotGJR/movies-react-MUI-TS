import BookmarkIcon from './components/icons/bookmark-icon';
import HomeIcon from './components/icons/home-icon';
import MovieIcon from './components/icons/movie-icon';
import TvSeriesIcon from './components/icons/series-icon';

const navLinks = [
  {
    name: 'Home',
    icon: HomeIcon,
    path: '/',
  },
  {
    name: 'TV Series',
    icon: TvSeriesIcon,
    path: '/tv-series',
  },
  {
    name: 'Movie',
    icon: MovieIcon,
    path: '/movies',
  },
  {
    name: 'Bookmark',
    icon: BookmarkIcon,
    path: '/bookmark',
  },
];

export { navLinks };
