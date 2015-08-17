/**
 * @fileOverview  easyrepl - Easily add a REPL to your js file for local debug
 * 
 * @author   Ruchir Godura
 *
 * @requires npm:lexical-scope
 * @requires npm:repl.history
 */

/** 
 * Easy REPL - easily add a repl to your .js file _with_ all the variables in the file in its scope
 * add the following to the end of your file
 * requires lexical-scope
 * @module easyrepl
 * 
 * @example
 *
 * if (require.main === module) {
 *    eval(require('./easyrepl'));
 * }
 */
/* jshint node: true */

module.exports = function(){/*!
(function(){
// DO NOT DELETE THESE COMMENTED LINES!! They form part of the code
// see http://stackoverflow.com/a/15558082/1936097

    var path = require('path');
    var filename = path.basename(__filename).split('.')[0];
    var repl = require('repl').start({prompt: filename + ' $> ', ignoreUndefined:true});
    require('repl.history')(repl, process.env.HOME+'/.easyrepl_history');
    var _context = repl.context;
    var thisFile = require('fs').readFileSync(__filename, {encoding: 'utf8'});
    if (thisFile[0] == '#') {thisFile = '//' + thisFile};
    var scope = require('lexical-scope')(thisFile); 
    for (var name in scope.locals[''] ) 
        _context[scope.locals[''][name]] = eval(scope.locals[''][name]);
    for (name in scope.globals.exported)
        _context[scope.globals.exported[name]] = eval(scope.globals.exported[name]);
        
    console.log('starting REPL for module %s...', path.basename(__filename).split('.')[0]);
})();   
*/}.toString().slice(15, -3);