function analyzeArray(array) {
    if (!Array.isArray(array)) {
        throw new Error('You must enter an array');
    }
    if (array.length === 0) {
        return {
            average: null,
            min: null,
            max: null,
            length: 0,
        };
    }
    if (array.some((value) => typeof value !== 'number')) {
        throw new Error('all entries in array must be numbers');
    }

    const totalSum = array.reduce((total, value) => total + value, 0);
    

   resultObject = {
    average: totalSum / array.length, 
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length};

   return resultObject
}

module.exports = analyzeArray;