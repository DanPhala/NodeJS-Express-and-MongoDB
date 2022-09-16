//Evaluating the area of the rectangle..
const rectangle = require('./rectangle');
var rect = require('./rectangle');

function solveRect(l,b) {
    //will use the Javascript object defined earlier
    console.log("Solving for the rectangle with l= " + l + " and b= "+  b);   

    rect(l,b, (err, rectangle) => {

        if(err){
            console.log("ERROR: ", err.message);
        }
        else {
            console.log("The Area of the rectangle of dimensions l = "
                        + l + " and b = " + b  + " is " + rectangle.area());
            
            console.log("The Perimeter of the rectangle of the dimensions l = " + l + " and b = " + b + 
            " is " + rectangle.perimeter());
        }
    });
    console.log("This statement is after the call to rect()");
}

//calling the function
solveRect(2,4);
solveRect(3,4);
solveRect(0,5);
solveRect(-3,5);