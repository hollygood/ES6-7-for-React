var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');
var Raven = require('raven-js');

var sentryKey = 'cd2a3db5675a4c1e859ef3f56ba0b31b';
var sentryApp = '92512';
var sentryURL = 'https://' + sentryKey + '@app.getsentry.com/' + sentryApp;
var _APP_INFO = {
	name: 'Github Battle',
	branch: '4',
	version: '1.0'
};

Raven.config(sentryURL, {
	release: _APP_INFO.version,
	tags: {
		branch: _APP_INFO.branch
	}
}).install();

ReactDOM.render(
	routes,
	document.getElementById('app')
);