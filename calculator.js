/* 
calculator object that contains functions for add, subtract, divide and multiply.
Each function should take two numbers and return the correct calculation
*/

const calculator = {
    add: function(a,b) {
        return(a + b)
    },
    subtract: function(a,b) {
        return(a - b)
    },
    divide: function(a,b) {
        return(a / b)
    },
    multiply: function(a,b) {
        return(a * b)
    }
};

module.exports = calculator;