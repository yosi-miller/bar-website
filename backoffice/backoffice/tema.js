import { createTheme } from '@mui/material/styles';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import createCache from '@emotion/cache';

// התקנת RTL
const theme = createTheme({
  direction: 'rtl',
});

// יצירת אובייקט עם הפלאגין RTL
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

// יצוא התמה והקאש
export { theme, cacheRtl };