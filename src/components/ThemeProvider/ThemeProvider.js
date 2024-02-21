import MontserratBoldItalic from 'assets/fonts/Montserrat-BoldItalic.woff2';
import MontserratBold from 'assets/fonts/Montserrat-Bold.woff2';
import MontserratItalic from 'assets/fonts/Montserrat-Italic.woff2';
import MontserratRegular from 'assets/fonts/Montserrat-Regular.woff2';
import MontserratMediumItalic from 'assets/fonts/Montserrat-MediumItalic.woff2';
import MontserratMedium from 'assets/fonts/Montserrat-Medium.woff2';
import { useHasMounted } from 'hooks';
import Head from 'next/head';
import { createContext, useEffect } from 'react';
import { classes, media } from 'utils/style';
import { theme, tokens } from './theme';
import { useTheme } from './useTheme';

export const ThemeContext = createContext({});

export const ThemeProvider = ({
  themeId = 'dark',
  theme: themeOverrides,
  children,
  className,
  as: Component = 'div',
  ...rest
}) => {
  const currentTheme = { ...theme[themeId], ...themeOverrides };
  const parentTheme = useTheme();
  const isRootProvider = !parentTheme.themeId;
  const hasMounted = useHasMounted();

  // Save root theme id to localstorage and apply class to body
  useEffect(() => {
    if (isRootProvider && hasMounted) {
      window.localStorage.setItem('theme', JSON.stringify(themeId));
      document.body.dataset.theme = themeId;
    }
  }, [themeId, isRootProvider, hasMounted]);

  return (
    <ThemeContext.Provider value={currentTheme}>
      {isRootProvider && (
        <>
          <Head>
            <meta name="theme-color" content={`rgb(${currentTheme.rgbBackground})`} />
          </Head>
          {children}
        </>
      )}
      {/* Nested providers need a div to override theme tokens */}
      {!isRootProvider && (
        <Component
          className={classes('theme-provider', className)}
          data-theme={themeId}
          {...rest}
        >
          {children}
        </Component>
      )}
    </ThemeContext.Provider>
  );
};

/**
 * Squeeze out spaces and newlines
 */
export function squish(styles) {
  return styles.replace(/\s\s+/g, ' ');
}

/**
 * Transform theme token objects into CSS custom property strings
 */
export function createThemeProperties(theme) {
  return squish(
    Object.keys(theme)
      .filter(key => key !== 'themeId')
      .map(key => `--${key}: ${theme[key]};`)
      .join('\n\n')
  );
}

/**
 * Transform theme tokens into a React CSSProperties object
 */
export function createThemeStyleObject(theme) {
  let style = {};

  for (const key of Object.keys(theme)) {
    if (key !== 'themeId') {
      style[`--${key}`] = theme[key];
    }
  }

  return style;
}

/**
 * Generate media queries for tokens
 */
export function createMediaTokenProperties() {
  return squish(
    Object.keys(media)
      .map(key => {
        return `
        @media (max-width: ${media[key]}px) {
          :root {
            ${createThemeProperties(tokens[key])}
          }
        }
      `;
      })
      .join('\n')
  );
}

export const tokenStyles = squish(`
  :root {
    ${createThemeProperties(tokens.base)}
  }

  ${createMediaTokenProperties()}

  [data-theme='dark'] {
    ${createThemeProperties(theme.dark)}
  }

  [data-theme='light'] {
    ${createThemeProperties(theme.light)}
  }
`);

export const fontStyles = squish(`
  @font-face {
    font-family: Montserrat;
    font-weight: 400;
    src: url(${MontserratRegular}) format('truetype');
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: Montserrat;
    font-weight: 400;
    src: url(${MontserratItalic}) format('woff2');
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: Montserrat;
    font-weight: 500;
    src: url(${MontserratMedium}) format('woff2');
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: Montserrat;
    font-weight: 500;
    src: url(${MontserratMediumItalic}) format('woff2');
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: Montserrat;
    font-weight: 700;
    src: url(${MontserratBold}) format('woff2');
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: Montserrat;
    font-weight: 700;
    src: url(${MontserratBoldItalic}) format('woff2');
    font-display: block;
    font-style: italic;
  }
`);
