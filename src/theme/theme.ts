import { extendTheme } from '@chakra-ui/react';

//? Include custom option in here... colors, fonts, etc!!
const customTheme = {};

const theme = extendTheme(customTheme, {
   fonts: {
      body: 'Roboto'
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
