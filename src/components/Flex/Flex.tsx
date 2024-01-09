'use client';

import { Classes, CSSProperties, GroundProps, Styles, StyleSheet, StyleSheetFactoryOptions, Theme } from '../../types/index';
import { applyOverrides, capitalize, fromKebabToCamel, getClassKey, replaceMultipleSpaces } from '../../helpers/index';
import { provideClasses, provideStylesheet, useTheme } from '../../styles/index';

type AlignContentProp = CSSProperties['alignContent'];
type AlignItemsProp = CSSProperties['alignItems'];
type FlexDirectionProp = CSSProperties['flexDirection'];
type FlexWrapProp = CSSProperties['flexWrap'];
type GapProp = CSSProperties['gap'];
type JustifyContentProp = CSSProperties['justifyContent'];

export interface FlexProps extends GroundProps {
  alignContent?: AlignContentProp;
  alignItems?: AlignItemsProp;
  flexDirection?: FlexDirectionProp;
  flexWrap?: FlexWrapProp;
  gap?: GapProp;
  justifyContent?: JustifyContentProp;
}

export const defaultFlexProps: FlexProps = {
  alignContent: 'stretch',
  alignItems: 'stretch',
  className: '',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  gap: '',
  justifyContent: 'flex-start'
};

export const FlexClassKey: string = getClassKey('flex');

export type FlexClasses =
  | 'root'
  | 'alignContentCenter'
  | 'alignContentFlexEnd'
  | 'alginContentFlexStart'
  | 'alignContentSpaceAround'
  | 'alignContentSpaceBetween'
  | 'alignContentStretch'
  | 'alignItemsBaseline'
  | 'alignItemsCenter'
  | 'alignItemsFlexEnd'
  | 'alignItemsFlexStart'
  | 'alignItemsStretch'
  | 'flexDirectionColumn'
  | 'flexDirectionColumnReverse'
  | 'flexDirectionRow'
  | 'flexDirectionRowReverse'
  | 'flexWrapNoWrap'
  | 'flexWrapWrap'
  | 'flexWrapWrapReverse'
  | 'justifyContentCenter'
  | 'justifyContentFlexEnd'
  | 'justifyContentFlexStart'
  | 'justifyContentSpaceAround'
  | 'justifyContentSpaceBetween'
  | 'justifyContentSpaceEvenly';

export function FlexStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      root: {
        display: 'flex'
      },
      alignContentCenter: {
        alignContent: 'center'
      },
      alignContentFlexEnd: {
        alignContent: 'flex-end'
      },
      alignContentFlexStart: {
        alignContent: 'flex-start'
      },
      alignContentSpaceAround: {
        alignContent: 'space-around'
      },
      alignContentSpaceBetween: {
        alignContent: 'space-between'
      },
      alignContentStretch: {
        alignContent: 'stretch'
      },
      alignItemsBaseline: {
        alignItems: 'baseline'
      },
      alignItemsCenter: {
        alignItems: 'center'
      },
      alignItemsFlexEnd: {
        alignItems: 'flex-end'
      },
      alignItemsFlexStart: {
        alignItems: 'flex-start'
      },
      alignItemsStretch: {
        alignItems: 'stretch'
      },
      flexDirectionColumn: {
        flexDirection: 'column'
      },
      flexDirectionColumnReverse: {
        flexDirection: 'column-reverse'
      },
      flexDirectionRow: {
        flexDirection: 'row'
      },
      flexDirectionRowReverse: {
        flexDirection: 'row-reverse'
      },
      flexWrapNowrap: {
        flexWrap: 'nowrap'
      },
      flexWrapWrap: {
        flexWrap: 'wrap'
      },
      flexWrapWrapReverse: {
        flexWrap: 'wrap-reverse'
      },
      justifyContentCenter: {
        justifyContent: 'center'
      },
      justifyContentFlexEnd: {
        justifyContent: 'flex-end'
      },
      justifyContentFlexStart: {
        justifyContent: 'flex-start'
      },
      justifyContentSpaceAround: {
        justifyContent: 'space-around'
      },
      justifyContentSpaceBetween: {
        justifyContent: 'space-between'
      },
      justifyContentSpaceEvenly: {
        justifyContent: 'space-evenly'
      }
    },
    'Flex'
  );
}

const options: StyleSheetFactoryOptions = {
  index: 2,
  meta: FlexClassKey
};

const classes: Classes = provideClasses(FlexStyles, options);

const theme = useTheme();
export const FlexStyle = FlexStyles(theme);

export const composeFlexClasses = (userProps: FlexProps = {}): string => {
  const composedProps = { ...defaultFlexProps, ...userProps };
  const alignContent = classes[`alignContent${fromKebabToCamel(capitalize(composedProps.alignContent))}`];
  const alignItems = classes[`alignItems${fromKebabToCamel(capitalize(composedProps.alignItems))}`];
  const flexDirection = classes[`flexDirection${fromKebabToCamel(capitalize(composedProps.flexDirection))}`];
  const flexWrap = classes[`flexWrap${fromKebabToCamel(capitalize(composedProps.flexWrap))}`];
  const gapClass = composedProps.gap ? selectGap(composedProps.gap) : '';
  const justifyContent = classes[`justifyContent${fromKebabToCamel(capitalize(composedProps.justifyContent))}`];
  const composedClasses =
    `${classes.root} ${alignContent} ${alignItems} ${flexDirection} ${flexWrap} ${gapClass} ${justifyContent} ${composedProps.className}`.trim();
  return replaceMultipleSpaces(composedClasses);
};

const selectGap = (gap: FlexProps['gap']): string => {
  const gapOptions: StyleSheetFactoryOptions = { ...options, meta: `${FlexClassKey}-flex-${gap}` };
  const gapClass = `flex${gap}`;
  const gapSheet: StyleSheet = provideStylesheet({ [gapClass]: { gap } }, gapOptions);
  const gapClasses: Classes = { ...gapSheet.classes };
  return gapClasses[gapClass];
};

export function Flex(props: FlexProps) {
  const { children } = props;
  const composedClasses = composeFlexClasses(props);

  return <div className={composedClasses}>{children}</div>;
}
