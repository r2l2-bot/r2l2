const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['en-US', 'pt-BR'],
    localeDetection: false,
    localePath: path.resolve('./public/locales'),
  },
};
