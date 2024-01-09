'use client';

import { Classes, CSSProperties, GroundProps, Styles, StyleSheet, StyleSheetFactoryOptions, Theme } from '../../types/index';
import { applyOverrides, capitalize, fromKebabToCamel, getClassKey, replaceMultipleSpaces } from '../../helpers/index';
import { provideClasses, provideStylesheet, useTheme } from '../../styles/index';

type AlignSelfProp = CSSProperties['alignSelf'];
type FlexBasisProp = CSSProperties['flexBasis'];
type FlexGrowProp = CSSProperties['flexGrow'];
type FlexProp = CSSProperties['flex'];
type FlexShrinkProp = CSSProperties['flexShrink'];
type OrderProp = CSSProperties['order'];

export interface FlexChildProps extends GroundProps {
  alignSelf?: AlignSelfProp;
  flex?: FlexProp;
  flexBasis?: FlexBasisProp;
  flexGrow?: FlexGrowProp;
  flexShrink?: FlexShrinkProp;
  order?: OrderProp;
}

export const defaultFlexChildProps: FlexChildProps = {
  alignSelf: 'auto',
  className: '',
  flex: '0 1 auto',
  flexBasis: 'auto',
  flexGrow: 0,
  flexShrink: 0,
  order: 0
};

export const FlexChildClassKey = getClassKey('flex-child');

export type FlexChildClasses =
  | 'root'
  | 'alignSelfAuto'
  | 'alignSelfBaseline'
  | 'alignSelfCenter'
  | 'alignSelfFlexEnd'
  | 'alignSelfFlexStart'
  | 'alignSelfStretch';

export function FlexChildStyles(theme: Theme): Styles {
  return applyOverrides(
    {
      root: {},
      alignSelfAuto: {
        alignSelf: 'auto'
      },
      alignSelfBaseline: {
        alignSelf: 'baseline'
      },
      alignSelfCenter: {
        alignSelf: 'center'
      },
      alignSelfFlexEnd: {
        alignSelf: 'flex-end'
      },
      alignSelfFlexStart: {
        alignSelf: 'flex-start'
      },
      alignSelfStretch: {
        alignSelf: 'stretch'
      }
    },
    'FlexChild'
  );
}

const options: StyleSheetFactoryOptions = {
  index: 2,
  meta: FlexChildClassKey
};
const classes: Classes = provideClasses(FlexChildStyles, options);

const theme = useTheme();
export const FlexChildStyle = FlexChildStyles(theme);

export const composeFlexChildClasses = (userProps: FlexChildProps = {}): string => {
  const composedProps = { ...defaultFlexChildProps, ...userProps };
  const alignSelf = classes[`alignSelf${fromKebabToCamel(capitalize(composedProps.alignSelf))}`];
  const flexClass = composedProps.flex ? selectFlex(composedProps.flex) : '';
  const flexBasisClass = composedProps.flexBasis ? selectFlexBasis(composedProps.flexBasis) : '';
  const flexGrowClass = composedProps.flexGrow ? selectFlexGrow(composedProps.flexGrow) : '';
  const flexShrinkClass = composedProps.flexShrink ? selectFlexShrink(composedProps.flexShrink) : '';
  const orderClass = composedProps.order ? selectOrder(composedProps.order) : '';
  const composedClasses = `${classes.root} ${alignSelf} ${flexClass}
      ${flexBasisClass} ${flexGrowClass} ${flexShrinkClass} ${orderClass} ${composedProps.className}`.trim();
  return replaceMultipleSpaces(composedClasses);
};

const selectFlex = (flex: FlexChildProps['flex']): string => {
  const encodedFlex = encodeURIComponent(`${flex}`);
  const flexOptions: StyleSheetFactoryOptions = { ...options, meta: `${FlexChildClassKey}-flex-${encodedFlex}` };
  const flexClass = `flex${encodedFlex}`;
  const flexSheet: StyleSheet = provideStylesheet({ [flexClass]: { flex } }, flexOptions);
  const flexClasses: Classes = { ...flexSheet.classes };
  return flexClasses[flexClass];
};

const selectFlexBasis = (flexBasis: FlexChildProps['flexBasis']): string => {
  const flexBasisOptions: StyleSheetFactoryOptions = { ...options, meta: `${FlexChildClassKey}-flex-basis-${flexBasis}` };
  const flexBasisClass = `flexBasis${flexBasis}`;
  const flexBasisSheet: StyleSheet = provideStylesheet({ [flexBasisClass]: { flexBasis } }, flexBasisOptions);
  const flexBasisClasses: Classes = { ...flexBasisSheet.classes };
  return flexBasisClasses[flexBasisClass];
};

const selectFlexGrow = (flexGrow: FlexChildProps['flexGrow']): string => {
  const flexGrowOptions: StyleSheetFactoryOptions = { ...options, meta: `${FlexChildClassKey}-flex-grow-${flexGrow}` };
  const flexGrowClass = `flexGrow${flexGrow}`;
  const flexGrowSheet: StyleSheet = provideStylesheet({ [flexGrowClass]: { flexGrow } }, flexGrowOptions);
  const flexGrowClasses: Classes = { ...flexGrowSheet.classes };
  return flexGrowClasses[flexGrowClass];
};

const selectFlexShrink = (flexShrink: FlexChildProps['flexShrink']): string => {
  const flexShrinkOptions: StyleSheetFactoryOptions = { ...options, meta: `${FlexChildClassKey}-flex-shrink-${flexShrink}` };
  const flexShrinkClass = `flexShrink${flexShrink}`;
  const flexShrinkSheet: StyleSheet = provideStylesheet({ [flexShrinkClass]: { flexShrink } }, flexShrinkOptions);
  const flexShrinkClasses: Classes = { ...flexShrinkSheet.classes };
  return flexShrinkClasses[flexShrinkClass];
};

const selectOrder = (order: FlexChildProps['order']): string => {
  const orderOptions: StyleSheetFactoryOptions = { ...options, meta: `${FlexChildClassKey}-order-${order}` };
  const orderClass = `order${order}`;
  const orderSheet: StyleSheet = provideStylesheet({ [orderClass]: { order } }, orderOptions);
  const orderClasses: Classes = { ...orderSheet.classes };
  return orderClasses[orderClass];
};

export function FlexChild(props: FlexChildProps) {
  const { children } = props;
  const composedClasses = composeFlexChildClasses(props);

  return <div className={composedClasses}>{children}</div>;
}
