import { AppProps } from 'next/app';
// Contexto do Chakra
import { ChakraProvider } from '@chakra-ui/react';
// Theme personalizado
import { theme } from '../styles/theme.';
import { SidebarDrawerProvider } from '../context/SidebarDrawerContext';
import { makeServer } from '../services/mirage';

if (process.env.NODE_ENV === 'development') {
  makeServer();
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <SidebarDrawerProvider>
        <Component {...pageProps} />
      </SidebarDrawerProvider>
    </ChakraProvider>
  )
}

export default MyApp
