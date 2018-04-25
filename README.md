# hope-license-adviser

If you have doubt on choosing a license, this package can help you choose the right one.

## Installation
```bash
$ npm i --save hope-license-adviser
```

## Usage

An overview:

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

/*

[ { name: 'MIT', mark: 0.92 },
  { name: 'BSD-3', mark: 0.92 },
  { name: 'BSD-2', mark: 0.92 },
  { name: 'Apache-2.0', mark: 0.67 },
  { name: 'EPL-1.0', mark: 0.67 },
  { name: 'GPL-3', mark: 0.58 },
  { name: 'LGPL-3', mark: 0.58 },
  { name: 'MPL-2.0', mark: 0.58 },
  { name: 'CDDL-1.0', mark: 0.58 } ]

*/

```

Other usages:

For getting info of a certail prperty:

```javascript
const LicenseAdvicer = require('hope-license-adviser');
const licenseAdvicer = new LicenseAdvicer();
let result = licenseAdvicer.getPropertyDetails("commercialUse");

/*

{ mark: 1,
  description: 'This software and derivatives may be used for commercial purposes.',
  type: 'Permission' }

*/

```

For getting info of certain license:

```javascript
const LicenseAdvicer = require('hope-license-adviser');
const licenseAdvicer = new LicenseAdvicer();
let result = licenseAdvicer.getLicenseInfo("MIT");

/*

{ commercialUse: true,
  destribution: true,
  modification: true,
  patentUse: false,
  privateUse: true,
  discloseSource: false,
  licenseAndCopyRightNotice: true,
  sameLicense: false,
  stateChange: false,
  liability: true,
  tradeMarkUse: false,
  warranty: true,
  description: 'MIT License (MIT)' }

*/

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
