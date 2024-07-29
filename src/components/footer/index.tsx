import React, { FC, ReactElement } from 'react';
import { Box, Container, Grid, Typography, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

export const Footer: FC = (): ReactElement => {
  return (
    <Box
      sx={{
        width: '100%',
        height: 'auto',
        paddingTop: '1rem',
        paddingBottom: '1rem',
        backgroundColor: '#1976d2'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography color="black" variant="h5" align="center">
              React Starter App
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography color="textSecondary" variant="subtitle1" align="center">
              {`${new Date().getFullYear()} | React | Material UI | React Router`}
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <IconButton sx={{ color: 'white' }} href="https://facebook.com" target="_blank">
                <Facebook />
              </IconButton>
              <Typography color="white" variant="body2" align="center">
                Follow us on Facebook
              </Typography>
              <Typography color="white" variant="body2" align="center">
                Stay connected with us
              </Typography>
              <Typography color="white" variant="body2" align="center">
                Get the latest updates
              </Typography>
              <Typography color="white" variant="body2" align="center">
                Join our community
              </Typography>
              <Typography color="white" variant="body2" align="center">
                Like, share, and comment
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <IconButton sx={{ color: 'white' }} href="https://twitter.com" target="_blank">
                <Twitter />
              </IconButton>
              <Typography color="white" variant="body2" align="center">
                Follow us on Twitter
              </Typography>
              <Typography color="white" variant="body2" align="center">
                Stay up to date
              </Typography>
              <Typography color="white" variant="body2" align="center">
                Tweet us your thoughts
              </Typography>
              <Typography color="white" variant="body2" align="center">
                Share your ideas
              </Typography>
              <Typography color="white" variant="body2" align="center">
                Join the conversation
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <IconButton sx={{ color: 'white' }} href="https://instagram.com" target="_blank">
                <Instagram />
              </IconButton>
              <Typography color="white" variant="body2" align="center">
                Follow us on Instagram
              </Typography>
              <Typography color="white" variant="body2" align="center">
                See our latest posts
              </Typography>
              <Typography color="white" variant="body2" align="center">
                Share your photos
              </Typography>
              <Typography color="white" variant="body2" align="center">
                Tag us in your stories
              </Typography>
              <Typography color="white" variant="body2" align="center">
                Join our visual journey
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <IconButton sx={{ color: 'white' }} href="https://linkedin.com" target="_blank">
                <LinkedIn />
              </IconButton>
              <Typography color="white" variant="body2" align="center">
                Connect with us on LinkedIn
              </Typography>
              <Typography color="white" variant="body2" align="center">
                Grow your network
              </Typography>
              <Typography color="white" variant="body2" align="center">
                Discover opportunities
              </Typography>
              <Typography color="white" variant="body2" align="center">
                Share your achievements
              </Typography>
              <Typography color="white" variant="body2" align="center">
                Join professional discussions
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
