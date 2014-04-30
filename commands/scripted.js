/*******************************************************************************
 * @license
 * Copyright (c) 2013 VMware, Inc. All Rights Reserved.
 * THIS FILE IS PROVIDED UNDER THE TERMS OF THE ECLIPSE PUBLIC LICENSE
 * ("AGREEMENT"). ANY USE, REPRODUCTION OR DISTRIBUTION OF THIS FILE
 * CONSTITUTES RECIPIENTS ACCEPTANCE OF THE AGREEMENT.
 * You can obtain a current copy of the Eclipse Public License from
 * http://www.opensource.org/licenses/eclipse-1.0.php
 *
 * Contributors:
 * Andy Clement - initial version
 ******************************************************************************/

/**
 * This code will launch the scripted server (via scriptedServer.js) and then
 * optionally open a URL on that server.
 */

var path = require('path');
var openBrowser = require('./open').open;
var url = "http://localhost:7261";

var options = require('optimist').alias('p', 'port').argv;
console.log(options);
var dir = options._[0]||process.cwd();

var suppressOpen = options._[1]==='false'?false:true;


try {
    require('fs').readdirSync(dir);
    console.log(dir);
}catch (error) {
    console.log(error);
    throw("invalid dir");
}


var filesystem = require('../server/utils/filesystem').withBaseDir(dir,
 {
        userHome: dir,
        scriptedHome: dir
});

// Launch the server
var server=require('../server/scriptedServer.js').start(filesystem, options);

// on return, assume it is up and open the browser
if (!suppressOpen) {
	openBrowser(options._[0]);
}
