//node module
module.exports = (x,y,callback) => {
     //Validating the length and breadth
     if(x <= 0 || y <= 0){
        setTimeout(() => 
                callback(new Error("Solving for the rectangle with l= " + x + " and b= "+  y), 
                null),
                2000);
        console.log("Rectangle dimensions should be greater than zero: l= " + x + " and b= " + y);

    } 
    else {
        setTimeout(() => 
                callback(null, 
                {
                    perimeter: (x,y) => (2*(x+y)),
                    area: () => (x*y)
                }),
                2000);
                console.log("Rectangle dimensions should be greater than zero: l= " + x + " and b= " + y);

    }
}


