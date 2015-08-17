##EasyRepl
  -easily add a repl to your .js file _with_ all the variables in the file in its scope

##How to use

Add the following at the end of your .js file

```javascript
 if (require.main === module) {
     eval(require('./easyrepl'));
 }
```
