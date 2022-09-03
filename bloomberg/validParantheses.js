/**
 * @param {string} s
 * @return {boolean}
 */

 getClose = (bracket) => {
    switch (bracket) {
        case '{':
            return '}';
        case '(':
            return ')';
        case '[':
            return ']';
        default:
            return ' ';
    }
}
isClose = (bracket) => {
    return bracket == '}' || bracket == ')' || bracket == ']';
}

var isValid = function(brackets) {
    var stack = []
    for (var i=0; i<brackets.length; i++){
        let c = brackets.charAt(i)
        if (stack.length > parseInt(brackets.length/2))
            return false
        if (!isClose(c))
            stack.push(c)
        else {
            if (stack.length === 0)
                return false
            if (getClose(stack.pop()) != c) {
                return false
            }
        }
    }
    if (stack.length === 0)
     return true
    else
     return false
};

console.log(isValid('()'))
console.log(isValid('()[]{}'))
console.log(isValid('(]'))