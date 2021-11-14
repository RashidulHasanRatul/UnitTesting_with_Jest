
const functions = require("./function");

test("Add 2+2 Equal to 4",function(){


    expect(functions.add(2,2)).toEqual(4);


})

// Negative Test 

test("Add 2+2 not Equal to 5",function(){

    expect(functions.add(2,2)).not.toBe(5);
});

// IsNull Test 

test("Should be null",function(){

    expect(functions.isNull()).toBe(null);
});

// Check value 
test("Should be Falsy",function(){

    expect(functions.isNull()).toBe(null);
});