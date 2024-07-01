function caesarCipher(string, key) {
    let encodeString = "";
    for (let i = 0; i < string.length; i++) {
        let code = string.charCodeAt(i);

        if (code >= 65 && code <= 90) {
            code -= 65;
            code = modulo(code + key, 26);
            code += 65;
        }
        else if (code >= 97 && code <= 122) {
            code -= 97;
            code = modulo(code + key, 26);
            code += 97;
        }
        encodeString += String.fromCharCode(code);
        //return encodeString;
    }
    return encodeString
}

function modulo(element, key) {
    if (element < 0) element = key - Math.abs(element) % key
    return element % key
}

module.exports = caesarCipher;