const copy = require('kopy');
const path = require('path');

const packages = [
  '@bigtest/interactor',
  '@bigtest/mirage',
  '@bigtest/mocha',
  '@bigtest/react',
  '@folio/stripes-core',
  'babel-polyfill@^6.26.0',
  'chai',
  'mocha',
  'sinon'
];

function setupBigTest() {
  const templateDir = path.join(__dirname, '../..', 'resources/bigtest');
  const testDir = path.resolve('./test/bigtest');

  return copy(templateDir, testDir, { clean: false }).then(() => {
    console.log('BigTest setup successfully');
  }).catch((err) => {
    console.log(err.stack);
  });
}

module.exports = {
  packages,
  setupBigTest
};
