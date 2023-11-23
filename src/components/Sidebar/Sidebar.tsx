import { Box, Hidden, Typography } from '@mui/material';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navLinks } from '../../constants';

const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <Box
      sx={{
        backgroundColor: '161d2f',
        padding: 2,
        borderRadius: 2,
        display: 'flex',
        flexDirection: {
          xs: 'row',
          lg: 'column',
        },
        alignItems: 'center',
        justifyContent: 'space-between',
        width: {
          sm: '100%',
          lg: 200,
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: {
            xs: 'row',
            lg: 'column',
          },
          alignItems: {
            xs: 'center',
            lg: 'start',
          },
          gap: 5,
          width: '100%',
        }}
      >
        <Hidden smDown>
          <Typography
            variant="h5"
            component="h1"
            my={2}
            fontWeight={400}
            fontSize={18}
          >
            Movies App
          </Typography>
        </Hidden>
        <Box
          sx={{
            py: { xs: '0px', ls: '16px' },
            display: 'flex',
            flexDirection: {
              xs: 'row',
              lg: 'column',
            },
            gap: 4,
          }}
        >
          {navLinks.map((link) => (
            <Link
              to={link.path}
              key={link.name}
              style={{ textDecoration: 'none' }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  color: '#fff',
                  textDecoration: 'none',
                }}
              >
                <link.icon />
                <Hidden mdDown>
                  <Typography>{link.name}</Typography>
                </Hidden>
              </Box>
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
