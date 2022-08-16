import React from 'react';
import { Box } from '@mui/material';
import AppHeader from '../components/Common/AppHeader';
import PostUpgradeAppNav from '../components/Common/PostUpgradeAppNav';

const PostUpgradeApp = () => {
  return (
    <Box>
      <AppHeader />
      <PostUpgradeAppNav />
    </Box>
  )
}

export default PostUpgradeApp;