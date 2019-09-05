## react-particle-line

![NPM version](https://img.shields.io/npm/v/react-particle-line.svg)
![MIT Licence](https://img.shields.io/npm/l/react-particle-line.svg)

### How to use
```
npm install react-particle-line --save
```

### Examples
```javascript
import React from 'react';
import ReactParticleLine from 'react-particle-line';

const Example = () => (
  <ReactParticleLine>
    {/* ... */}
  </ReactParticleLine>
);

export default Example;
```

```javascript
import React from 'react';
import ReactParticleLine from 'react-particle-line';

const Example = () => (
  <ReactParticleLine
    lineWidth={0.3}
    dotsNumber={100}
    dotsDistance={100}
    hoverEffect={true}
  >
    {/* ... */}
  </ReactParticleLine>
);

export default Example;
```

### Props

| Prop         | Type    | Default  | Description   |
| -------      | -----   | :------: |  -----------  |
| lineWidth    | Number  |  0.3     |  connect line width   |
| dotsNumber   | Number  |  100     |  dot number   |
| dotsDistance | Number  |  100     |  far as points to connect   |
| hoverEffect  | Boolean |  true    |  mouse hover events   |

### License

MIT
