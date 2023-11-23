import { MovieTrendListProps } from '../../types';
import { Box, Grid, Paper } from '@mui/material';
import MovieTrend from '../MovieCard/MovieTrend';

const MovieTrendList = ({ trendingList }: MovieTrendListProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: 2,
        overflowX: 'scroll',
        '&::-webkit-scrollbar': {
          display: 'none',
        },
      }}
    >
      {trendingList.map((movie) => (
        <Grid item key={movie.id}>
          <Paper
            elevation={0}
            sx={{
              backgroundColor: 'transparent',
            }}
          >
            <MovieTrend movie={movie}></MovieTrend>
          </Paper>
        </Grid>
      ))}
    </Box>
  );
};

export default MovieTrendList;
