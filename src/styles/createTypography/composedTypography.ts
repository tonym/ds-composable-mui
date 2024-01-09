import { pxToRem } from '../../helpers/index';
import { fontWeights } from '../../store/index';
import { useTokens } from '../useTokens/index';
import { TypographyOptions, TypographyVariantStyle } from '../../types/index';

const blocksDefault = useTokens();

const fontFamilies = '"Helvetica", Helvetica, Arial, sans-serif';

const composeVariant = (token: string): TypographyVariantStyle => {
  const variant = { ...blocksDefault[token] };
  return {
    fontFamily: `"${variant.fontFamily}", ${fontFamilies}`,
    fontSize: pxToRem(variant.fontSize),
    fontWeight: fontWeights[variant.fontWeight.toLowerCase()],
    letterSpacing: variant.letterSpacing,
    lineHeight: variant.lineHeight,
    textDecoration: variant.textDecoration,
    textTransform: variant.textCase
  };
};

export const composedTypography: TypographyOptions = {
  fontFamily: `"${blocksDefault.TypographyBody1.fontFamily}", ${fontFamilies}`,
  variants: {
    body1: { ...composeVariant('TypographyBody1') },
    body2: { ...composeVariant('TypographyBody2') },
    button: { ...composeVariant('TypographyButton') },
    caption: { ...composeVariant('TypographyCaption') },
    h1: { ...composeVariant('TypographyH1') },
    h2: { ...composeVariant('TypographyH2') },
    h3: { ...composeVariant('TypographyH3') },
    h4: { ...composeVariant('TypographyH4') },
    h5: { ...composeVariant('TypographyH5') },
    h6: { ...composeVariant('TypographyH6') },
    overline: { ...composeVariant('TypographyOverline') },
    subtitle1: { ...composeVariant('TypographySubtitle1') },
    subtitle2: { ...composeVariant('TypographySubtitle2') }
  }
};
