// // components/ProfileCard.tsx
// 'use client';
// import React from 'react';
// import { Card, CardContent, CardMedia, Typography, Box, Chip, Stack, IconButton, Rating, Divider } from '@mui/material';
// import AddIcon from '@mui/icons-material/Add';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

// interface ProfileCardProps {
//   name: string;
//   levelAndJob: string;
//   rating: number;
//   reviewsCount: string;
//   experienceYears: number;
//   imageUrl: string;
//   tags: string[];
//   price: string;
//   originalPrice: string;
//   offerText: string;
//   onAddClick: () => void;
//   onFavoriteClick: () => void;
// }

// const ProfileCard: React.FC<ProfileCardProps> = ({
//   name,
//   levelAndJob,
//   rating,
//   reviewsCount,
//   experienceYears,
//   imageUrl,
//   tags,
//   price,
//   originalPrice,
//   offerText,
//   onAddClick,
//   onFavoriteClick
// }) => {
//   return (
//     <Card sx={{ maxWidth: 348, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', mb: 2 }}>
//       <CardContent>
//         <Typography gutterBottom variant="h6" component="div">
//           {name}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           {levelAndJob}
//         </Typography>
//         <Box display="flex" alignItems="center" mt={1}>
//           <Rating name="read-only" value={rating} readOnly precision={0.5} size="small" />
//           <Typography variant="body2" color="text.secondary" ml={0.5}>
//             ({reviewsCount})
//           </Typography>
//           <Typography variant="body2" color="text.secondary" ml={1}>
//             (+{experienceYears} Y)
//           </Typography>
//         </Box>
//       </CardContent>
//       <CardMedia component="img" height="140" image={imageUrl} alt="profile image" />
//       <CardContent>
//         <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
//           {tags.map((tag, index) => (
//             <Chip key={index} label={tag} />
//           ))}
//         </Stack>
//         <Typography variant="h5" component="div">
//           {price}$
//         </Typography>
//         <Typography variant="body2" color="text.secondary" sx={{ textDecoration: 'line-through' }}>
//           {originalPrice}$
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           {offerText}
//         </Typography>
//         <Divider sx={{ my: 1 }} />
//         <Box display="flex" justifyContent="space-between">
//           <IconButton aria-label="add to cart" onClick={onAddClick}>
//             <AddIcon />
//           </IconButton>
//           <IconButton aria-label="add to favorites" onClick={onFavoriteClick}>
//             <FavoriteBorderIcon />
//           </IconButton>
//         </Box>
//       </CardContent>
//     </Card>
//   );
// };

// export default ProfileCard;

// components/ProfileCard.tsx

import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Chip, Stack, IconButton, Rating, Divider } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

interface ProfileCardProps {
  name: string;
  levelAndJob: string;
  rating: number;
  reviewsCount: string;
  experienceYears: number;
  imageUrl: string;
  tags: string[];
  price: string;
  originalPrice: string;
  offerText: string;
  onAddClick: () => void;
  onFavoriteClick: () => void;
  compact?: boolean; // For compact mode styling
  drawerMode?: boolean; // To indicate if it's being rendered in a drawer
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  levelAndJob,
  rating,
  reviewsCount,
  experienceYears,
  imageUrl,
  tags,
  price,
  originalPrice,
  offerText,
  onAddClick,
  onFavoriteClick,
  compact = false,
  drawerMode = false
}) => {
  return (
    <Card
      sx={{
        maxWidth: compact ? 250 : 348,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        mb: 2,
        p: drawerMode ? 2 : 1, // Adjust padding if in drawer mode
        boxShadow: drawerMode ? 'none' : 3 // Remove shadow in drawer mode
      }}
    >
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {levelAndJob}
        </Typography>
        <Box display="flex" alignItems="center" mt={1}>
          <Rating name="read-only" value={rating} readOnly precision={0.5} size="small" />
          <Typography variant="body2" color="text.secondary" ml={0.5}>
            ({reviewsCount})
          </Typography>
          <Typography variant="body2" color="text.secondary" ml={1}>
            (+{experienceYears} Y)
          </Typography>
        </Box>
      </CardContent>
      <CardMedia component="img" height={compact ? 100 : 140} image={imageUrl} alt="profile image" />
      <CardContent>
        <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
          {tags.map((tag, index) => (
            <Chip key={index} label={tag} />
          ))}
        </Stack>
        <Typography variant="h5" component="div">
          {price}$
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ textDecoration: 'line-through' }}>
          {originalPrice}$
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {offerText}
        </Typography>
        <Divider sx={{ my: 1 }} />
        <Box display="flex" justifyContent="space-between">
          <IconButton aria-label="add to cart" onClick={onAddClick}>
            <AddIcon />
          </IconButton>
          <IconButton aria-label="add to favorites" onClick={onFavoriteClick}>
            <FavoriteBorderIcon />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
