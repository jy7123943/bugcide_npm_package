![logo](./dist/img/logo.png)

# Bugcide

Bugcide is a JavaScript error tracking solutions.
It captures any uncaught errors, report errors, and log messages.

## Getting Started

Getting started with Bugcide is a three step process:

1. [Sign up for an account](https://www.bugcide.live).
2. Create a new project and get a Project Token.
3. Follow the directions below to install Bugcide.

The examples below show how to load Bugcide in different systems.

### For React.js

To begin, you'll need to install [`bugcide`](https://www.npmjs.com/package/bugcide) and [`bugcide-webpack-plugin`](https://www.npmjs.com/package/bugcide-webpack-plugin) via npm:

```
$ npm i bugcide bugcide-webpack-plugin
```

#### index.js

```javascript
import React from 'react';
import { render } from 'react-dom';
import App from './src/App';
import Bugcide from 'bugcide';

new Bugcide().init({ projectToken: <your-project-token> });

render(<App />, document.getElementById('root'));
```

#### webpack.config.js

```javascript
const bugcidePlugin = require('bugcide-webpack-plugin');

module.exports = {
  ...
  plugins: [
    ...
    new bugcidePlugin({
      projectToken: <your-project-token>
    })
  ]
};
```


### For Vanilla JavaScript

You need to include bugcide.vanilla.js first.
You can download the latest version of bugcide.vanilla.js on [GitHub](https://github.com/jy7123943/bugcide_npm_package).
bugcide.vanilla.js built files are also available through jsDelivr.

```javascript
<script src="https://cdn.jsdelivr.net/npm/bugcide@1.0.2/dist/bugcide.vanilla.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bugcide@1.0.2/dist/bugcide.vanilla.min.js"></script> // minified version
```

```javascript
<script src="https://cdn.jsdelivr.net/npm/bugcide@1.0.2/dist/bugcide.vanilla.js"></script>
<script>
  new Bugcide().init({ projectToken: <your-project-token> });
</script>
```


## License

[MIT](https://github.com/jy7123943/bugcide_npm_package/blob/master/LICENSE.md)
