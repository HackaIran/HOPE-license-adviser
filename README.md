# hope-license-adviser

If you have doubt on choosing a license, this package can help you choose the right one.

## Installation
```bash
$ npm i --save hope-license-adviser
```

## Usage
```javascript
const LicenseAdvicer = require('hope-license-adviser');
const licenseAdvicer = new LicenseAdvicer();
let result = licenseAdviser({
    commercialUse: true,
    destribution: true,
    modification: true,
    patentUse: false,
    privateUse: true,
    discloseSource: false,
    licenseAndCopyRightNotice: false,
    sameLicense: false,
    stateChange: false,
    liability: true,
    tradeMarkUse: false,
    warranty: true
  });

console.log(result);

// see the result

```

## Scripts
* `npm run compile` - Compiles source files to disk (~/lib).
* `npm run compile:watch` - Same as `npm run compile` but watches files for changes.
* `npm run lint` - Lints source and test files.
* `npm run lint:fix` - Lints files and attempts to fix any issues.
* `npm run test` - Runs unit tests.
* `npm run test:watch` - Same as `npm test` but watches files for changes.
* `npm run test:cov` - Generates a test coverage report.

## Distribution
Execute one of the following commands
```bash
npm version patch -m "Bump to %s"
npm version minor -m "Bump to %s"
npm version major -m "Bump to %s"
```
## License
MIT
