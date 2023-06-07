function didFuncPass(three, four) {
    return Boolean(three) === Boolean(four);
}

function didFuncPassNB(three, four) {
    return three === four;
}
 
// const didFuncPassNB = (three, four) => three === four

/* isEmpty() Test 1 */
let text = "Here is a String";
let expected = false;
let result = isEmpty(text);

console.log("isEmpty() Test 1", didFuncPass(expected, result))

/* isEmpty() Test 2 */
text = "";
expected = true;
result = isEmpty(text);

console.log("isEmpty() Test 2", didFuncPass(result, expected))

/* wordCounter() Test 1 */
text="one";
expected = 1;
result= wordCounter(text);

console.log("wordCounter() Test 1", didFuncPassNB(expected, result))

/*wordCounter() Test 2 */
text="";
expected = 0;
result= wordCounter(text);

console.log("wordCounter() Test 2", didFuncPassNB(expected, result))

/*wordCounter() Test 3 */
text = "one two";
expected = 2;
result= wordCounter(text);

console.log("wordCounter() Test 3", didFuncPassNB(expected, result))

/* sentence counter() Test 1 */
text = "sentence";
expected = 1;
result= sentenceCounter(text);

console.log("sentenceCounter() Test 1", didFuncPassNB(expected, result))