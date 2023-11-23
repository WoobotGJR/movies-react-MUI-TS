import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

interface MovieListProps {
  recommendList: MovieDataType[];
}

interface MovieTrendListProps {
  trendingList: MovieDataType[];
}

interface MovieDataType {
  id: string;
  title: string;
  thumbnail: {
    trending?: {
      small: string;
      large: string;
    };
    regular: {
      small: string;
      medium: string;
      large: string;
    };
  };
  year: number;
  category: string;
  rating: string;
  isBookmarked: boolean;
  isTrending: boolean;
}

interface MovieContentProps {
  children: ReactNode;
}

interface MovieState {
  movies: MovieDataType[];
}

interface MovieAction {
  type: string;
  id: string;
}

interface MovieCardProps {
  movie: MovieDataType;
}

export type {
  LayoutProps,
  MovieListProps,
  MovieTrendListProps,
  MovieDataType,
  MovieContentProps,
  MovieState,
  MovieAction,
  MovieCardProps,
};
