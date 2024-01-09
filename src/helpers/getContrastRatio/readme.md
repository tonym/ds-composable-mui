# getContrastRatio

Calculates the contrast ratio between two colors.

## API

### Import

```javascript
import { getContrastRatio } from '@uiproto/core';
```

### Signature

```javascript
getContrastRatio(foreground: string, background: string): number
```

### Parameters

- **foreground** : The foreground color.
- **background** : The background color.

### Returns

- **number**

## Examples

### Calculate a contrast ratio:

```javascript
const contrastRatio = getContrastRatio('#000', '#fff');

console.log(contrastRatio); // 21
```
