# express-accepts-exact

Simple express middleware for filtering routes by exact matches of Accepts header.

This is useful for having routes that behave like github's api with experimental features that require one of the accepts be `application/vnd.github.pegasus` allowing clients to opt into possible breaking changes.

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]

## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/). Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```sh
$ npm install express-accepts-exact --save
```

## Example
Only use this route if accepts header contains `application/vnd.mydomain.experimental`.
```js 
let acceptExact = require("express-accepts-exact");
let acceptExperimental = acceptExact("application/vnd.mydomain.experimental");

router.get("/api/file/:file", acceptExperimental, getFileExperimental);
router.get("/api/file/:file", getFile); // Fallback to non experimental version.
```

Only use this route if accepts header contains `application/vnd.mydomain.custom` or `plain/text`
```js
let acceptExact = require("express-accepts-exact");
app.get("/api/custom-download/:file", acceptExact(["application/vnd.mydomain.custom", "plain/text"]), getFile);
```

## API

### acceptExact(paths);

#### paths

Must contain a string or an array of strings.

## License

[ISC](LICENSE)

[npm-image]: https://img.shields.io/npm/v/express-accepts-exact.svg
[npm-url]: https://npmjs.org/package/express-accepts-exact
[downloads-image]: https://img.shields.io/npm/dm/express-accepts-exact.svg
[downloads-url]: https://npmjs.org/package/express-accepts-exact
