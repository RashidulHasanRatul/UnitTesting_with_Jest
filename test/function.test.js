
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

    expect(functions.checkValue(undefined)).toBeFalsy();
});

// Check Object 
test("User Should be Rashidul Hasan",function(){

    expect(functions.createUser()).toEqual({firstName:"Rashidul",lastName:"Hasan"});
});


//  greater than 

test("Check Less than and grater than",function(){

    expect(functions.graterThan()).toBeGreaterThan(299);

})

// Less than

test("Check Less than and grater than",function(){

    expect(functions.lessThan()).toBeLessThan(400);

})

// Regular Expression 

test("Check Less than and grater than",function(){

    expect('Rashidul').not.toMatch(/c/);

})

//Array 
test("Check Arrays",function(){

    let names=['Ratul',"Rashidul","Hasan"];

    expect(names).toContain("Ratul");

});

// Working with ASYNC Data   

test("Fetch Data From User Name Should Be Leanne Graham  ",function(){

    


});