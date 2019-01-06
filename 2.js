/**             OBJECT ORIENTED JavaScropt
 *  
 * 
 * */

 console.log("**** OBJECT ORIENTED JavaScript, Plese look at 2.js file *** ");
 console.log("**** OBJECT ORIENTED JavaScript, Plese look at 2.js file *** ");

 /**
  * we group related functions and variables in a object.
  * these are also known as property and method.
  */

    // let salary = 200;                                      // these line of code
    // let overtime = 20;                                     // can be written 
    // let rate = 2;
    // function generateWages(salary, overtime, rate){        // in object oriented way
    //     return salary + (overtime * rate);
    
    // };  

    // re-writting above code
    
        let employee = {
            salary: 200000,
            overtime: 30,
            rate: 40,

            generateWages: function(){
                return this.salary + (this.overtime * this.rate); 
            }
            
        };
    console.log(employee.generateWages());

    // *****   OBJECTS

    // object literal syntex
    // const fruit = {};x
    // on object on javascript is a key value pairs

    const circle = {
        radius: 1,      //these are key and value pair
        location: {   // location is a object in side object circle
            x:1,       //  radius and location is property
            y:1,
        },
        draw: function(){    // draw is function onject in circle object.
            console.log("draw");  // this function members are called METHODS
        },
    };

    circle.draw();


    //    FACTORY FUNCTION
    // now if we need to create another circle we can duplicate the code 

    function createRectangle(side){
        return {
            side,
            draw: function(x){
               return x = side*4;
            },
        };
    };

   
    console.log( createRectangle(5).draw(4));
/// CONSTRUCTOR function

function Square(sides){
    this.sides = sides;
    this.draw = function(){
        console.log("draw");
    };
};
const first = new Square(4);
console.log(first);