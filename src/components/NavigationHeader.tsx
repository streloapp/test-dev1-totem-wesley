'use client';

<<<<<<< HEAD
import useNavigation from '@/hook/useNavigation';
=======
import useNavigation from '@/hooks/useNavigation';
>>>>>>> aa952c3 (fix: improve NavigationHeader logic)
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function NavigationHeader() {
<<<<<<< HEAD
  const { currentEstablishment, title, setTitle, headerColor, setHeaderColor } =
=======
  const { headerTitle, headerColor, setHeaderColor, setHeaderTitle } =
>>>>>>> aa952c3 (fix: improve NavigationHeader logic)
    useNavigation();
  const pathname = usePathname();
  const pageConfig: { [key: string]: { title: string; color: string } } = {
    '/flights': { title: 'Informações de Voos', color: '#1C1611' },
    '/restaurants': { title: 'Restaurantes', color: '#E30026' },
    '/services': { title: 'Lojas & Serviços', color: '#52C2DE' },
    '/map': { title: 'Mapa do Aeroporto', color: '#004489' },
    '/chatbot': { title: 'Atendente Virtual', color: '#6650BD' },
  };

  function createBackLink() {
    return pathname.split('/').length > 2 ? `/${pathname.split('/')[1]}` : '/';
  }

  function updateNavigationHeader(pathname: string) {
    if (pathname.startsWith('/restaurants/')) {
<<<<<<< HEAD
      setTitle('Restaurante');
      setHeaderColor(pageConfig['/restaurants'].color);
    } else if (pathname.startsWith('/services/')) {
      if (currentEstablishment) {
        setTitle(
          currentEstablishment.segments.includes('store') ? 'Loja' : 'Serviço'
        );
        setHeaderColor(pageConfig['/services'].color);
      }
    } else if (pageConfig[pathname]) {
      setTitle(pageConfig[pathname].title);
=======
      setHeaderTitle('Restaurante');
      setHeaderColor(pageConfig['/restaurants'].color);
    } else if (pageConfig[pathname]) {
      setHeaderTitle(pageConfig[pathname].title);
>>>>>>> aa952c3 (fix: improve NavigationHeader logic)
      setHeaderColor(pageConfig[pathname].color);
    }
  }

  useEffect(() => {
    updateNavigationHeader(pathname);
<<<<<<< HEAD
  }, [pathname, currentEstablishment]);

  return (
    <>
      {title && headerColor && (
=======
  }, [pathname]);

  return (
    <>
      {headerTitle && headerColor && (
>>>>>>> aa952c3 (fix: improve NavigationHeader logic)
        <Box
          sx={{
            position: 'fixed',
            top: '80px',
            left: 0,
            right: 0,
            zIndex: 2,
            height: '40px',
            paddingLeft: '1.75rem',
            backgroundColor: headerColor,
          }}
        >
          <Link
            href={createBackLink()}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'start',
<<<<<<< HEAD
              gap: '8px',
              width: '100%',
=======
              gap: '.75rem',
>>>>>>> aa952c3 (fix: improve NavigationHeader logic)
              height: '100%',
            }}
          >
            <Image
              src="/back-arrow.svg"
<<<<<<< HEAD
              height={20}
              width={20}
=======
              height={16}
              width={16}
>>>>>>> aa952c3 (fix: improve NavigationHeader logic)
              alt="Seta para esquerda"
            />
            <Typography
              component="span"
              sx={{ color: 'white', fontWeight: 600, fontSize: '1.25rem' }}
            >
<<<<<<< HEAD
              {title}
=======
              {headerTitle}
>>>>>>> aa952c3 (fix: improve NavigationHeader logic)
            </Typography>
          </Link>
        </Box>
      )}
    </>
  );
}
