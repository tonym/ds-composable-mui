# FlexChild

MUI component | Overridable | WCAG level | Dev status
:-----------: | :---------: | :--------: | :------------:
no | yes | | beta

## Import

### Component
```javascript
import { FlexChild } from '@uiproto/core';
```
### Types
```javascript
import { FlexChildProps } from '@uiproto/core';
import { FlexChildClasses } from '@uiproto/core';
```

### Styles creator
```javascript
import { FlexChildStyles } from  '@uiproto/core';
```

### Rendered JSS
```javascript
import { FlexChildStyle } from  '@uiproto/core';
```

## Props
Name | Type | Default | Description
---- | ---- | ------- | -----------
alignSelf | CSSProperties['alignSelf'] | 'auto' | |
classes | object | | Override the styles applied to the component.
className | string \| string[] | | Class(es) applied to the component. Can be either a string, or an array of strings.
flex | CSSProperties['flex'] | '0 1 auto' | |
flexBasis | CSSProperties['flexBasis'] | 'auto' | |
flexGrow | CSSProperties['flexGrow'] | 0 | |
flexShrink | CSSProperties['flexShrink'] | 0 | |
order | CSSProperties['order'] | 0 | |

## Classes
Rule name | Class | Description
--------- | ----- | -----------
root | .adi-flex-child-root | Styles applied to the root element.
alignSelfAuto | .adi-flex-child-align-self-auto | Styles applied to the root element if `alignSelf="auto"`.
alignSelfBaseline | .adi-flex-child-align-self-baseline | Styles applied to the root element if `alignSelf="baseline"`.
alignSelfCenter | .adi-flex-child-align-self-center | Styles applied to the root element if `alignSelf="center"`.
alignSelfFlexEnd | .adi-flex-child-align-self-flex-end | Styles applied to the root element if `alignSelf="flexEnd"`.
alignSelfFlexStart | .adi-flex-child-align-self-flex-start | Styles applied to the root element if `alignSelf="flexStart"`.
alignSelfStretch | .adi-flex-child-align-self-stretch | Styles applied to the root element if `alignSelf="stretch"`.
`flex${encodeURIComponent(flex)}` | `.adi-flex-child-flex-${encodeURIComponent(flex)}` | Styles applied when `flex="..."`.
`flexBasis${flexBasis}` | `.adi-flex-child-flex-basis-${flexBasis}` | Styles applied when `flexBasis="..."`.
`flexGrow${flexGrow}` | `.adi-flex-child-flex-grow-${flexGrow}` | Styles applied when `flexGrow="..."`.
`flexShrink${flexShrink` | `.adi-flex-child-flex-shrink-${flexShrink}` | Styles applied when `flexShrink="..."`.
`order${order}` | `.adi-order-${order}` | Styles applied when `order="..."`.
