/*******************************************************************************
 * @license
 * Copyright (c) 2011 VMware Inc and others.
 * All rights reserved. This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License v1.0
 * (http://www.eclipse.org/legal/epl-v10.html), and the Eclipse Distribution
 * License v1.0 (http://www.eclipse.org/org/documents/edl-v10.html).
 *
 * Contributors: VMware Inc. - initial API and implementation
 ******************************************************************************/

/*global window require test module asyncTest */
var config = {
	baseUrl: '../scripts',
	packages: [
		{ name: 'dojo', location: 'lib/dojo', main:'lib/main-browser', lib:'.'},
		{ name: 'dijit',location: 'lib/dijit',main:'lib/main',lib: '.'},
		{ name: 'probes', location: '../components/probes', main:'probe', lib: '.'},
		{ name: 'when', location: '../components/when', main:'when', lib: '.'},
		{ name: 'wire', location: '../components/wire', main:'wire', lib: '.'},
		{ name: 'meld', location: '../components/meld', main:'meld', lib: '.'},
		{ name: 'text', location: '../components/requirejs-text', main: 'text'},
		{ name: 'i18n', location: '../components/requirejs-i18n', main: 'i18n'}
	],
	paths: {
		'orion/assert' : '../tests/client/assert',
		'esprima/esprima' : 'lib/esprima/esprima',
		jsbeautify: 'lib/beautify',
		jsrender: 'lib/jsrender',
		jshint: 'lib/jshint-r12-80277ef',
		qunit: 'lib/qunit/qunit-1.10.0',
		jquery: 'lib/jquery-1.7.2.min',
		sockjs:'lib/sockjs-592774a-0.3.1.min',
		fileapi: 'scripted/fileapi',
		'doctrine/doctrine' : '../components/doctrine/doctrine',
		'lib/json5' : '../components/json5/lib/json5',

		tests: '../tests'
	}
};
