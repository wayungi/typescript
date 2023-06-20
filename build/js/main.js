"use strict";
let username = "francis";
console.log(username);
// tsc filename.ts -w :will watch & recompile 
// tsc --init : create the typescript config file
// tsc -w :watch the src folder and compile all typescript files. this is only possible afer initializing typescript with the !tsc --init command
/* add this in the main tsconfig object to exclude all .ts files that are not inside the src folder from being compile
"include" : [
    "src"
  ]
  */ 
