const reverseString = require('./Module/reverseString')

test("Should Check Reverse String",function(){

    expect(reverseString("Hello")).toEqual("olleh");
})