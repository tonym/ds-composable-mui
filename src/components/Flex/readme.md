# Flex

MUI component | Overridable | WCAG level | Dev status
:-----------: | :---------: | :--------: | :------------:
no | yes | | beta

## Import

### Component
```javascript
import { Flex } from '@uiproto/core';
```
### Types
```javascript
import { FlexProps } from '@uiproto/core';
import { FlexClasses } from '@uiproto/core';
```

### Styles creator
```javascript
import { FlexStyles } from  '@uiproto/core';
```

### Rendered JSS
```javascript
import { FlexStyle } from  '@uiproto/core';
```

## Props
Name | Type | Default | Description
---- | ---- | ------- | -----------
alignContent | CSSProperties['alignContent'] | 'stretch' | |
alignItems | CSSProperties['alignItems'] | 'stretch' | |
classes | object | | Override the styles applied to the component. |
className | string \| string[] | | Class(es) applied to the component. Can be either a string, or an array of strings.|
flexDirection | CSSProperties['flexDirection'] | 'row' | |
flexWrap | CSSProperties['flexWrap'] | 'noWrap' | |
gap | CSSProperties['gap'] | | |
justifyContent | CSSProperties['justifyContent'] | 'flex-start' | |

## Classes
Rule name | Class | Description
--------- | ----- | -----------
root | .adi-flex-root | Styles applied to the root element.
alignContentCenter | .adi-flex-align-content-center | Styles applied if `alignContent="center"`.
alignContentFlexEnd | .adi-flex-align-content-flex-end | Styles applied if `alignContent="flexEnd"`.
alignContentFlexStart | .adi-flex-align-content-flex-start | Styles applied if `alignContent="flexStart"`.
alignContentSpaceAround | .adi-flex-align-content-space-around | Styles applied if `alignContent="spaceAround"`.
alignContentSpaceBetween | .adi-flex-align-content-space-between | Styles applied if `alignContent="spaceBetween"`.
alignContentStretch | .adi-flex-align-content-stretch | Styles applied if `alignContent="stretch"`.
alignItemsBaseline | .adi-flex-align-items-baseline | Styles applied if `alignItems="baseline"`.
alignItemsCenter | .adi-flex-align-items-center | Styles applied if `alignItems="center"`.
alignItemsFlexEnd | .adi-flex-align-items-flex-end | Styles applied if `alignItems="flexEnd"`.
alignItemsFlexStart | .adi-flex-align-items-flex-start | Styles applied if `alignItems="flexStart"`.
alignItemsStretch | .adi-flex-align-items-stretch | Styles applied if `alignItems="stretch"`.
flexDirectionColumn | .adi-flex-direction-column | Styles applied if `flexDirection="column"`.
flexDirectionColumnReverse | .adi-flex-direction-column-reverse | Styles applied if `flexDirection="columnReverse"`.
flexDirectionRow | .adi-flex-direction-row | Styles applied if `flexDirection="row"`.
flexDirectionRowReverse | .adi-flex-direction-row-reverse | Styles applied if `flexDirection="rowReverse"`.
flexWrapNoWrap | .adi-flex-wrap-no-wrap | Styles applied if `flexWrap="noWrap"`.
flexWrapWrap | .adi-flex-wrap-wrap | Styles applied if `flexWrap="wrap"`.
flexWrapWrapReverse | .adi-flex-wrap-wrap-reverse | Styles applied if `flexWrap="wrapReverse"`.
justifyContentCenter | .adi-flex-justify-content-center | Styles applied if `justifyContent="center"`.
justifyContentFlexEnd | .adi-flex-justify-content-flex-end | Styles applied if `justifyContent="flexEnd"`.
justifyContentFlexStart | .adi-flex-justify-content-flex-start | Styles applied if `justifyContent="flexStart"`.
justifyContentSpaceAround | .adi-flex-justify-content-space-around | Styles applied if `justifyContent="spaceAround"`.
justifyContentSpeceBetween | .adi-flex-justify-content-space-between | Styles applied if `justifyContent="spaceBetween"`.
justifyContentSpaceEvenly | .adi-flex-justify-content-space-evenly | Styles applied if `justifyContent="spaceEvenly"`.
