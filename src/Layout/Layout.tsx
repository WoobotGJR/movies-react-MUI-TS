import { Box } from '@mui/material';
import Sidebar from '../components/Sidebar/Sidebar';
import { LayoutProps } from '../types';

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box
      sx={{
        backgroundColor: '#10141F',
        display: 'flex',
        flexDirection: {
          xs: 'column',
          lg: 'row',
        },
        color: '#fff',
        padding: 3,
        gap: 3,
        overflowY: 'hidden',
        height: '100vh',
      }}
    >
      <Sidebar></Sidebar>
      <Box
        sx={{
          width: '100%',
          overflowY: 'scroll',
          overflowX: 'hidden',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
