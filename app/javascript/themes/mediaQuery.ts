import materialTheme from './materialTheme';

const { breakpoints } = materialTheme;

interface MediaQuery {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

const sizes = {
  ...breakpoints.values,
};

// @ts-ignore
const mediaQ: MediaQuery = Object.keys(sizes).reduce((acc, label) => {
  // @ts-ignore
  acc[label] = `@media screen and (max-width: ${sizes[label]}px)`;
  return acc;
}, {});

export default mediaQ;
