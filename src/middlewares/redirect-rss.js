'use strict';

let config = require('../config');
let request = require('request');
let action = require('mue-core/modules/action');
require('mue-core/modules/actions/request-to-service');

function getRequestedUrl(originalUrl) {
    // originalUrl - /api/rss/info
    // to            /info
    return '/' + originalUrl.split('/').slice(3).join('/');
}

module.exports = function (req, res, next) {
    action.execute('requestToService', {
        service: 'rss',
        method: req.method,
        url: getRequestedUrl(req.originalUrl),
        data: req.body
    })
        .then(function (results) {
            res.send(results);
        })
        .catch(function (err) {
            res.send(err);
        });
};