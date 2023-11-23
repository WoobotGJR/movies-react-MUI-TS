import { useContext } from 'react';
import { MovieCardProps } from '../../types';
import { MovieContext } from '../../context/MovieContext';
import { Box, Card, CardContent, Grid, Stack, Typography } from '@mui/material';
// import testThumbnail from '../../assets/Test-Logo.svg';
import moviesIcon from '../../assets/icons/icon-category-movie.svg';
import tvIcon from '../../assets/icons/icon-category-tv.svg';
import BookmarkIcon from '../icons/bookmark-icon';
import BookmarkEmptyIcon from '../icons/bookmark-empy-icon';

const MovieTrend = ({ movie }: MovieCardProps) => {
  const { dispatch } = useContext(MovieContext);

  const handleToggleBookmark = (id: string) => {
    dispatch({
      type: 'TOGGLE_BOOKMARK',
      id,
    });
  };

  return (
    <Card
      key={movie.id}
      elevation={0}
      style={{ backgroundColor: 'transparent' }}
    >
      <CardContent
        style={{
          padding: 0,
          position: 'relative',
          display: 'flex',
        }}
      >
        <img
          src={movie.thumbnail.regular.large}
          alt=""
          style={{
            width: '300px',
            height: '100%',
            borderRadius: '10px',
            objectFit: 'cover',
          }}
        />
        <Box
          position="absolute"
          top={0}
          left={0}
          bottom={0}
          right={0}
          bgcolor="rgba(0, 0, 0, 0.6)"
          borderRadius="10px"
        />
        <Stack
          mt="6"
          spacing={0}
          position="absolute"
          // this props are not the same as width and height setted to 100%
          // and bottom and right 0
          bottom={0}
          left={0}
          right={0}
          top={0}
          padding={1}
        >
          <Grid item>
            <Typography fontSize={10} color="#E0E0E0" aria-label="year">
              {movie.year}
            </Typography>
          </Grid>
          <Grid item>
            <Box
              sx={{
                width: '1rem',
                height: '1rem',
                bg: '#E0E0E0',
                borderRadius: 'full',
              }}
            />
          </Grid>
          <Grid item>
            <img
              src={movie.category === 'Movies' ? moviesIcon : tvIcon}
              width={20}
              height={20}
              alt=""
            />
          </Grid>
          <Grid item>
            <Typography
              fontSize={10}
              color="#E0E0E0"
              aria-label="category"
              fontWeight={700}
            >
              {movie.category}
            </Typography>
          </Grid>
          <Grid item>
            <Box
              sx={{
                width: '4px',
                height: '1rem',
                bg: '#E0E0E0',
                borderRadius: 'full',
              }}
            />
          </Grid>
          <Grid item>
            <Typography
              fontSize={10}
              color="#E0E0E0"
              aria-label="rating"
              fontWeight={700}
            >
              {movie.rating}
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              fontSize={10}
              color="#E0E0E0"
              aria-label="title"
              fontWeight={700}
              p={0}
            >
              {movie.title}
            </Typography>
          </Grid>
        </Stack>
        <Box
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            display: 'flex',
            justifyContent: 'flex-end',
            padding: '16px',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            right: '0.5rem',
            top: '0.5rem',
            width: '1rem',
            height: '1rem',
            padding: '0.25rem',
            cursor: 'pointer',
            '&: hover': { opacity: 0.8 },
          }}
          onClick={() => {
            handleToggleBookmark(movie.id);
          }}
        >
          {movie.isBookmarked ? (
            <BookmarkIcon fill={'#E0E0E0'} />
          ) : (
            <BookmarkEmptyIcon />
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default MovieTrend;
