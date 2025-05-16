const stringUtils = require('./stringUtils.js');

console.log(stringUtils.capitalize("hello"));

console.log(stringUtils.reverse("hello"));

console.log(stringUtils.contains("hello", "ell"));

console.log(stringUtils.contains("hello", "world"));

try {
    console.log(stringUtils.capitalize(""));
}
catch(e) {
    console.error(e.message);
}

try {
    console.log(stringUtils.reverse(42));
}
catch(e) {
    console.error(e.message);
}

try {
    console.log(stringUtils.contains(42, ""));
}
catch(e) {
    console.error(e.message);
}