'use strict';
const path = require('path');

module.exports = appInfo => {
    const config = exports = {};

    config.keys = appInfo.name + '_1573889511545_8219';

    config.middleware = [];

    const userConfig = {
        view: {
            root: [ path.join(appInfo.baseDir, 'app/view') ].join(','),
            mapping: {
                '.njk': 'nunjucks',
            },
            defaultExtension: '.njk',
            defaultViewEngine: 'nunjucks',
        },
    };

    return {
        ...config,
        ...userConfig,
    };
};
