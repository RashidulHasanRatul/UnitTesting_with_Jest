
const axios = require('axios');
const functions = require("./Module/function");

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

// // Working with Promise   
//  test('User fetched name should be Leanne Graham', () => {
//     expect.assertions(1)
//   return functions.fetchUser().then(data => {
//   expect(data.name).toEqual('Leanne Graham');
//    });
//  });

 // Async Await
test('User fetched name should be Leanne Graham', async () => {
    expect.assertions(1);
    const data = await functions.fetchUser();
    expect(data.name).toEqual('Leanne Graham');
  });