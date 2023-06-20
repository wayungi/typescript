let username = "wayungi"
console.log(username)

//   ***learner notes****
// tsc filename.ts -w :will watch & recompile 
// tsc --init : create the typescript config file
// tsc -w :watch the src folder and compile all typescript files. this is only possible afer initializing typescript with the !tsc --init command

/* add this in the main tsconfig object to exclude all .ts files that are not inside the src folder from being compile
"include" : [
    "src"
  ]
  */

let a = 12
let b = '2'
let c = 4

console.log(a/b)

// noEmitOnError :is a tsconfig setting that stops typescript from compiling a js file when the compiler has errors
// we could also do it on the terminal like this: tsc --noEmitOnError -w


//  **terminology**
/*
    strongly typed       : require type specification (typescript)
    loosely/weakly typed : Dont require type specification (javascript)

    static typing : types ara checked at compile time (ts)
    dynamic typing : types are checked at run time (js)



*/  
 
