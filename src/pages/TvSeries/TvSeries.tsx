import { useState, useContext, SetStateAction } from 'react';
import Layout from '../../Layout/Layout';
import {
  Box,
  InputAdornment,
  InputBase,
  Paper,
  Typography,
} from '@mui/material';
import SearchIcon from '../../assets/icons/icon-search.svg';
import MovieList from '../../components/MovieList/MovieList';
import { MovieDataType } from '../../types';
import { MovieContext } from '../../context/MovieContext';

const TvSeries = () => {
  const [search, setSearch] = useState('');
  const [searchList, setSearchList] = useState<MovieDataType[]>([]);
  const { state } = useContext(MovieContext);
  const { movies } = state;
  const tv = movies.filter((item) => item.category === 'TV Series');

  const handleSearch = (e: { target: { value: SetStateAction<string> } }) => {
    setSearch(e.target.value);
    const newList = tv.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    setSearchList(newList);
  };

  return (
    <Layout>
      <Box>
        <Paper
          component="form"
          sx={{
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            borderRadius: 'default',
            padding: 1,
            backgroundColor: '#10141f',
            border: 'none',
          }}
        >
          <InputBase
            placeholder="Search for films here..."
            sx={{
              ml: 1,
              flex: 1,
              color: '#fff',
              border: 'none',
            }}
            value={search}
            onChange={handleSearch}
            startAdornment={
              <InputAdornment position="start">
                <img
                  src={SearchIcon}
                  alt="search icon"
                  width={20}
                  height={20}
                />
              </InputAdornment>
            }
          />
        </Paper>
      </Box>
      <Box py={2} px={4}>
        {search === '' ? (
          <Box width="100%">
            <Typography component="h1" variant="h5" fontWeight={400} my={6}>
              List of films
              <MovieList recommendList={search === '' ? tv : searchList} />
            </Typography>
          </Box>
        ) : (
          <Box width="100%">
            <Typography component="h1" variant="h5" fontWeight={400} my={6}>
              Found {searchList.length} results for "{search}"
            </Typography>
            <MovieList recommendList={searchList}></MovieList>
          </Box>
        )}
      </Box>
    </Layout>
  );
};

export default TvSeries;
