![logo](./dist/img/logo.png)

# Bugcide

Bugcide는 자바스크립트 에러 트래킹 솔루션입니다.
모든 에러를 감지하여 보고하고 에러 로그를 관리해줍니다.

Bugcide is a JavaScript error tracking solutions.
It captures any uncaught errors, report errors, and log messages.

## Getting Started

Bugcide를 시작하려면 다음과 같은 3단계의 과정이 필요합니다:

1. [사이트 로그인](https://www.bugcide.live).
2. 새 프로젝트 생성 및 프로젝트 토큰 발급.
3. 아래 가이드를 참고하여 Bugcide 설치 및 적용.

Getting started with Bugcide is a three step process:

1. [Sign up for an account](https://www.bugcide.live).
2. Create a new project and get a Project Token.
3. Follow the directions below to install Bugcide.

### For React.js

먼저 npm으로 [`bugcide`](https://www.npmjs.com/package/bugcide)와 [`bugcide-webpack-plugin`](https://www.npmjs.com/package/bugcide-webpack-plugin)을 설치합니다.

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

바닐라 자바스크립트 프로젝트를 위해 bugcide.vanilla.js가 제공됩니다.  
[GitHub](https://github.com/jy7123943/bugcide_npm_package)에서 가장 최신 버전의 bugcide.vanilla.js를 다운받을 수 있습니다.  
또한 jsDelivr CDN으로 간단히 참조할 수 있습니다.

You need to include bugcide.vanilla.js first.  
You can download the latest version of bugcide.vanilla.js on [GitHub](https://github.com/jy7123943/bugcide_npm_package).  
bugcide.vanilla.js built files are also available through jsDelivr.

```javascript
<script src="https://cdn.jsdelivr.net/npm/bugcide@1.0.3/dist/bugcide.vanilla.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bugcide@1.0.3/dist/bugcide.vanilla.min.js"></script> // minified version
```

```javascript
<script src="https://cdn.jsdelivr.net/npm/bugcide@1.0.3/dist/bugcide.vanilla.js"></script>
<script>
  new Bugcide().init({ projectToken: <your-project-token> });
</script>
```

## License

[MIT](https://github.com/jy7123943/bugcide_npm_package/blob/master/LICENSE.md)
