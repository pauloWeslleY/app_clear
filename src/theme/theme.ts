import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

//? Include custom option in here... colors, fonts, etc!!
const customTheme = {};

const config: ThemeConfig = {
   initialColorMode: 'light',
   useSystemColorMode: true
}

const theme = extendTheme(customTheme, {
   config,
   fonts: {
      body: `'Roboto', sans-serif`,
   },
   colors: {
      blue: {
         10: '#14213D',
      },
      yellow: {
         10: '#FCA311',
      },
      gray: {
         10: '#E5E5E5',
         40: '#161a1d',
      }
   }
});

export default theme;
