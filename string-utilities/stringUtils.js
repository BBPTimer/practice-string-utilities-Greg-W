//capitalize(str): Converts the first letter of a string to uppercase.

function capitalize(str) {
    if(str && typeof str === "string") {
        return str.charAt(0).toUpperCase() + str.slice(1);
    } else {
        throw new Error("Invalid string");
    }
}

//reverse(str): Reverses the characters in a string.

function reverse(str) {
    if(str && typeof str === "string") {
        return str.split('').reverse().join('');
    } else {
        throw new Error("Invalid string");
    }
}

//contains(str, substr): Checks if a substring exists within a string and returns true or false.

function contains(str, substr) {
    if(str && substr && typeof str === "string" && typeof substr === "string") {
        return str.includes(substr);
    } else {
        throw new Error("Invalid string(s)");
    }
}

module.exports = {capitalize, reverse, contains};