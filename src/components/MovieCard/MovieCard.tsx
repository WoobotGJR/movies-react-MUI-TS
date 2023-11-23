import { MovieCardProps } from '../../types';
import { useContext } from 'react';
import { MovieContext } from '../../context/MovieContext';
import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
// import testThumbnail from '../../assets/Test-Logo.svg';
import moviesIcon from '../../assets/icons/icon-category-movie.svg';
import tvIcon from '../../assets/icons/icon-category-tv.svg';
import BookmarkIcon from '../icons/bookmark-icon';
import BookmarkEmptyIcon from '../icons/bookmark-empy-icon';

const MovieCard = ({ movie }: MovieCardProps) => {
  const { dispatch } = useContext(MovieContext);

  const handleToggleBookmark = (id: string) => {
    console.log('cliked');

    dispatch({
      type: 'TOGGLE_BOOKMARK',
      id,
    });
  };
  return (
    <Card
      variant="outlined"
      sx={{ bgcolor: 'transparent', color: '#E0E0E0', my: 3, border: 'none' }}
    >
      <CardContent sx={{ p: 0, position: 'relative' }}>
        <Grid container spacing={1}>
          <Grid item>
            <img
              src={movie.thumbnail.regular.large}
              alt=""
              style={{
                width: '400px',
                height: '180px',
                borderRadius: '8px',
                objectFit: 'cover',
              }}
            />
          </Grid>

          <Grid item xs={8}>
            <Grid container spacing={1} alignItems="center">
              <Grid item>
                <Typography
                  fontSize={10}
                  color="#E0E0E0"
                  aria-label="year of movie"
                >
                  {movie.year}
                </Typography>
              </Grid>
              <Grid item>
                <Box
                  sx={{
                    width: '4px',
                    height: '4px',
                    background: '#BDBDBD',
                    borderRadius: '50%',
                  }}
                />
              </Grid>
              <Grid item>
                <img
                  src={movie.category === 'Movies' ? moviesIcon : tvIcon}
                  alt=""
                  width={16}
                  height={16}
                />
              </Grid>
              <Grid item>
                <Typography
                  fontSize={10}
                  color="#E0E0E0"
                  aria-label="movie category"
                >
                  {movie.category}
                </Typography>
              </Grid>
              <Grid item>
                <Box
                  sx={{
                    width: '4px',
                    height: '4px',
                    background: '#BDBDBD',
                    borderRadius: '50%',
                  }}
                />
              </Grid>
              <Grid item>
                <Typography
                  fontSize={10}
                  color="#E0E0E0"
                  aria-label="movie rating"
                >
                  {movie.rating}
                </Typography>
              </Grid>
            </Grid>
            <Typography aria-label="movie rating" padding={0}>
              {movie.title}
            </Typography>
          </Grid>
          <Grid item xs={2} sx={{ position: 'absolute', top: 0, right: 0 }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
                p: '1rem',
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  p: '1rem',
                  cursor: 'pointer',
                  '&:hover': { opacity: 0.8 },
                }}
                onClick={() => handleToggleBookmark(movie.id)}
              >
                {movie.isBookmarked ? (
                  <BookmarkIcon fill={'#E0E0E0'} />
                ) : (
                  <BookmarkEmptyIcon />
                )}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
