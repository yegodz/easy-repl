##EasyRepl
  -easily add a repl to your .js file _with_ all the variables in the file in its scope

##How to use

Add the following at the end of your `myFile.js` file

```javascript
 if (require.main === module) {
     eval(require('./easyrepl'));
 }
```
Then from the command line, you can type `node myfile.js` and it will execute all functions in `myfile.js` and load all module level and global objects into your scope and throw you into a REPL so you can interactively debug your code.

Yes, you can do a `.load myfile.js` from within node, but that completely messes up your REPL history
