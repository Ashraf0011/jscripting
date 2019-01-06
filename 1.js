/**         Bignners Javascript 
 * 
 * */
console.log( '**** BEGINNERS JavaScript   please look at 1.js file  ****' );
console.log( '**** BEGINNERS JavaScript   please look at 1.js file  ****' );
console.log( 'Hello world' );
let name = 'ashraf';
let myName = `ashraful`;       
//we can use both single ``,'' or "" but good to use '' for variables
// best-peactise use ** let ** for declaring variable
const myfullname = `md ashraful islam`;
// ** const ** is used to declare constans 
// there shuld be no space or hyphen in variable names
// name can not start with numbers (1name, 2balls) NO
console.log(name);
console.log(myName);
console.log(myfullname);

/** in javaScript we have two catagories of TYPES
 * 
 * ****   premitives / value types       ******   references types
 *      strings    : "ashraf"                *   objects    :  let person = { name: 'sdf', age: 20, alive: true };
 *      numbers    : 30                      *   arrays     : let cart = ["watch","tv","book" ]
 *      boolean    : ture                    *   functions  : 
 *      undefined  : undefined
 *      null       : null
 */



 //////    OBJECTS     are multiple related veriables
 
    let firstPerson = {  
     name: 'ashraful',
     age: 30
    };    // an object can have multiple properties
    let secondPerson = {
    name: 'mohammed',
    age: 35
    };
    // we use dot notation (.) or bracket notation to access the inner value ([]) of a property.

  console.log(firstPerson);
  console.log("age:",secondPerson.age,"name:", secondPerson.name);


//////      ARRAYS     are list of variables, items

    let availableColors = ['red', 'blue', 'green', 'yellow'];
    // we can add different types in one array in js
        availableColors[4] = 2;
    console.log("availableColors:",availableColors);


//////       FUNCTIONS    

    function greet(name) {  // <- here name is the function input
        console.log("hello " + myName + " welcome to world ");  // name is getting value from above code
        console.log("and you are " + firstPerson.age + " years old ");  // name is getting value from above code
    };
 greet(name);

    function square(number){
        return  number * number;
   
    };
   console.log(square(4));
   console.log("*******  END of BEGINNERS  Module ********");
   console.log("*******  END of BEGINNERS  Module ********");
   console.log("  ");

