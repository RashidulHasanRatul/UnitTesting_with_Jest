const { default: axios } = require("axios");

const functions = {

add: function (num1,num2) {
    return num1+num2;

},

isNull: function(){

    return null;
},

checkValue:function(x){

    return x;
},

createUser: function (){

    const user = {
        firstName:"Rashidul",
        lastName:"Hasan"
    }

 
    return  user;
    
},

graterThan: function(){
    let a=100;
    let b = 200;
    let sum = a+b;
    return sum
},

lessThan: function(){
    let a=100;
    let b = 200;
    let sum = a+b;
    return sum
},


fetchUser: function(){
    axios.get("https://jsonplaceholder.typicode.com/users/1")
    .then(function(res){
        return res.data;
    })
    .catch(function(err){
        console.log(err);
    })

}



};

module.exports = functions;