// // components/BasicModal.tsx
// 'use client';

// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Modal from '@mui/material/Modal';
// import { useTheme } from '@mui/material/styles';
// import useMediaQuery from '@mui/material/useMediaQuery';

// const BasicModal: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   const theme = useTheme();
//   const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

//   const style = {
//     position: 'absolute' as const,
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: isSmallScreen ? '90%' : 400,
//     bgcolor: 'background.paper',
//     border: '2px solid #000',
//     boxShadow: 24,
//     p: 4
//   };

//   return (
//     <div>
//       <Button onClick={handleOpen}>Open modal</Button>
//       <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
//         <Box sx={style}>{children}</Box>
//       </Modal>
//     </div>
//   );
// };

// export default BasicModal;
'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { ReactNode } from 'react';

const style = {
  // eslint-disable-next-line @typescript-eslint/prefer-as-const
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
};

export default function BasicModal({ children }: { children?: ReactNode }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>{children}</Box>
      </Modal>
    </div>
  );
}
