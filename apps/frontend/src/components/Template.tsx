import { Grid, GridItem, GridProps } from '@chakra-ui/react';
import Header from './header';
import Footer from './Footer';
import { createContext, useContext } from 'react';
import { useSessionStorage } from 'usehooks-ts';
import CenteredGridItem from './CenteredGridItem';

const ThemeContext = createContext<any>(false);

type ThemeContextProps = {
  // eslint-disable-next-line no-undef
  children: JSX.Element;
};

export function useTheme() {
  return useContext(ThemeContext);
}

export type TemplateProps = GridProps & {
  darkMode?: boolean;
};

export const ThemeProvider = ({ children }: ThemeContextProps) => {
  const [currentTheme, setCurrentTheme] = useSessionStorage('theme', true);
  const toggleDarkMode = () => {
    setCurrentTheme(!currentTheme);
  };
  const context = {
    currentTheme,
    toggleDarkMode
  };
  return <ThemeContext.Provider value={context}>{children}</ThemeContext.Provider>;
};

export default function Template({ children }: TemplateProps) {
  return (
    <ThemeProvider>
      <TemplateContent>{children}</TemplateContent>
    </ThemeProvider>
  );
}

export function TemplateContent({ children }: TemplateProps) {
  const { currentTheme, toggleDarkMode } = useTheme();
  const bgColor = currentTheme ? 'brand.900' : 'brand.50';
  const textColor = currentTheme ? 'brand.50' : 'brand.900';

  return (
    <Grid
      gridTemplateRows={'200px 1fr 200px'}
      w={'100vw'}
      h={'100vh'}
      justifyContent={'center'}
      alignItems={'center'}
      bgColor={bgColor}
      textColor={textColor}
      transitionDuration={'200ms'}
      overflow={'none'}>
      <GridItem w={'100vw'} h={'auto'}>
        <Header toggleDarkMode={toggleDarkMode} currentTheme={currentTheme} />
      </GridItem>
      <CenteredGridItem>{children}</CenteredGridItem>
      <GridItem>
        <Footer />
      </GridItem>
    </Grid>
  );
}
