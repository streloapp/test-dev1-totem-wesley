'use client';

import NavigationHeader from '@/components/NavigationHeader';
<<<<<<< HEAD
import useNavigation from '@/hook/useNavigation';
import { Box, Container } from '@mui/material';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
=======
import useNavigation from '@/hooks/useNavigation';
import { Box } from '@mui/material';
>>>>>>> aa952c3 (fix: improve NavigationHeader logic)
import { useEffect } from 'react';

export default function PagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
<<<<<<< HEAD
  const { currentEstablishment, fetchMenuItems, fetchEstablishments } =
    useNavigation();
  const pathname = usePathname();

  useEffect(() => {
    fetchMenuItems();
    fetchEstablishments();
=======
  const { fetchMenuItems } = useNavigation();

  useEffect(() => {
    fetchMenuItems();
>>>>>>> aa952c3 (fix: improve NavigationHeader logic)
  }, []);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      <NavigationHeader />
      {currentEstablishment &&
        currentEstablishment.backgroundImage &&
        pathname.split('/').length > 2 && (
          <Box
            sx={{
              width: '100%',
              height: {
                xs: '20vh',
                md: '40vh',
              },
              mt: '40px',
              position: 'relative',
            }}
          >
            <Image
              src={currentEstablishment.backgroundImage}
              fill
              alt={currentEstablishment.name}
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
          </Box>
        )}
      <Container
        maxWidth="md"
        sx={{
          mt:
            currentEstablishment &&
            currentEstablishment.backgroundImage &&
            pathname.split('/').length > 2
              ? '0px'
              : '40px',
        }}
      >
        {children}
      </Container>
    </Box>
  );
}
