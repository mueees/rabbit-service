'use strict';

let error = require('mue-core/modules/error');

const API_PREFIX = '/api';

let redirectRssMiddleware = require('../middlewares/redirect-rss');

module.exports = function (app) {
    app.use(API_PREFIX + '/rss/*', redirectRssMiddleware);
};