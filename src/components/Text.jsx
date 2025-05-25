import { Text as NativeText, StyleSheet } from 'react-native';

import theme from '../theme';

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },
  colorTextSecondary: {
    color: theme.colors.textSecondary,
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  fontSizeSubheading: {
    fontSize: theme.fontSizes.subheading,
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold,
  },
  bgColorNav: {
    backgroundColor: theme.bgColors.nav,
  },
});

const Text = ({
  color,
  fontSize,
  fontWeight,
  backgroundColor,
  style,
  children,
  ...props
}) => {
  const textStyle = [
    styles.text,
    color === 'textSecondary' ? styles.colorTextSecondary : null,
    color === 'primary' ? styles.colorPrimary : null,
    backgroundColor === 'nav' ? styles.bgColorNav : null,
    fontSize === 'subheading' ? styles.fontSizeSubheading : null,
    fontWeight === 'bold' ? styles.fontWeightBold : null,
    style, // must be last to take precedence
  ].filter(Boolean);

  return <NativeText style={textStyle}>{children}</NativeText>;
};

export default Text;
