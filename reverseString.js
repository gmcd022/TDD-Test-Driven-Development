function reverseString(string) {
    const array = Array.from(string);
     return array.reverse().join("");
}

module.exports = reverseString;