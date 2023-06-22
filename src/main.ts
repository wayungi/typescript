        //! let username = "wayungi"
        //! console.log(username)

//   ***learner notes****
// tsc filename.ts -w :will watch & recompile 
// tsc --init : create the typescript config file
// tsc -w :watch the src folder and compile all typescript files. this is only possible afer initializing typescript with the !tsc --init command

/* add this in the main tsconfig object to exclude all .ts files that are not inside the src folder from being compile
"include" : [
    "src"
  ]
  */
        //! let a = 12
        //! let b = '2'
        //! let c = 4
        //! console.log(a/b)

// noEmitOnError :is a tsconfig setting that stops typescript from compiling a js file when the compiler has errors
// we could also do it on the terminal like this: tsc --noEmitOnError -w

// **===========lesson 2====================**
//?  terminology
/*
    strongly typed       : require type specification (typescript)
    loosely/weakly typed : Dont require type specification (javascript)

    static typing : types ara checked at compile time (ts)
    dynamic typing : types are checked at run time (js)

*/  

// **data type
// number, boolean, any
    //! let album: string | number   // union

     
// **===========lesson 3==================**
//? arrays,objects, enums, 
    //! let names = ["james", "jack", "john"];
    //! let james = ['Day', 'Male', 35];
    //! let mixed = ['Black', 36, false];

    //! mixed = names
    //! james = names
    //! names = james //not acceptable

// definning arrays with predefined types
    //! let test = []; // can hold any data type
    //! let bands: string[] = []; // can only hold string

    //! test.push('long', true, 36) // will take any data type
    //! console.log(test)
//  bands.push("eagle", "afrigo", 1) //  will throw an error because 1 is not a string

// ** the tuple type : if you want to define an array that takes in specific data types at specific indices then you can define a tuple as below

    //! let tuple: [string, number, boolean] = ["rancis", 37, true]
    //! let mixer = ['juma', 4, false]

// **objects  53:17

let myobj:object; 
let bands = ["afrigo","eagles"]
myobj = {};
myobj = [] // An array is also an object in javascript
myobj = bands

let obj =  {
    prop1: 'string',
    prop2: true,
    prop3: 42
}

    //! obj['prop1'] = 3 // this expression is invalid because prop1 is a string

// object wit  type annotation

type Musician = {
    name: string,
    genre: string[],
    albums: (string|number)[],
    facts: [string, number, boolean], // tribe, year of birth, ever won award
}

let gnl_zamba: Musician = {
    name:'zamba',
    genre: ['luga flow', 'street'],
    albums:[2011, 'katwa'],
    facts: ['zamba', 1987, true]
}

