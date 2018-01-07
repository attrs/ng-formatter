var formatter = require('tinyformatter');

module.exports = angular.module('ngFormatter', [])
.filter('abs', function() { return formatter.abs; })
.filter('moment', function() { return formatter.date; })
.filter('symbol', function() { return formatter.symbol; })
.filter('currency', function() { return formatter.currency; });

module.exports.locale = formatter.locale;
