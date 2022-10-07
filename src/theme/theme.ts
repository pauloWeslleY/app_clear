import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

//? Include custom option in here... colors, fonts, etc!!
const customTheme = {};

const config: ThemeConfig = {
   initialColorMode: 'light',
   useSystemColorMode: false
}

const colors = {
   blue: {
      10: 'var(--blue-10)',
   },
   yellow: {
      10: 'var(--yellow-10)',
   },
   gray: {
      10: 'var(--gray-10)',
      40: 'var(--gray-40)',
   }
}

const theme = extendTheme({
   customTheme,
   config,
   fonts: {
      heading: `'Nunito', sans-serif`,
      body: `'Nunito', sans-serif`,
   },
   colors
});

export default theme;
