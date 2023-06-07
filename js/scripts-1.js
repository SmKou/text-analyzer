
/** BUSINESS LOGIC
 * Functionality:
 * - count number of words in text passage
 * - count number of sentences in text passage
 * - count number of instances of word in text passage
 * - find positions of phrase, word or part of word in text passage
 * 
 * Functionality:
 * - omit offensive words from text passage
 * Ex. profanities: ['zoinks', 'muppeteer', 'biffaroni', 'loopdaloop']
 * @param text {String} "There are zoinks dogs everywhere, biffaroni!"
 * @return text {String} "There are dogs everywhere!"
 * Source: https://www.learnhowtoprogram.com/introduction-to-programming/arrays-and-looping/practice-extending-text-analyzer-business-logic-with-tdd
 *  
 * Functionality:
 * -
 * Source: https://www.learnhowtoprogram.com/introduction-to-programming/arrays-and-looping/practice-using-tdd-with-text-analyzer
 */

/**
 * Determine if a string is empty.
 * @param {String} testStr
 * @returns {Boolean}
 */
function isEmpty(testStr) {
    return testStr.trim().length === 0;
}

/**
 * Determine how many words are in a text passage
 * @param {String} text 
 * @returns {Number} no of words in text
 */
function wordCounter(text) {
    if (isEmpty(text))
        return 0;
    return text.match(/[A-Za-z0-9]+/g).length;
}

/**
 * Determine the number of sentences in a text passage
 * @param {String} text 
 * @returns {Number} 
 */
function sentenceCounter(text) {
    if (isEmpty(text))
        return 0;
    const textArray = text.split(/[.!?]+/g);
    if (isEmpty(textArray[textArray.length - 1]))
        textArray.pop();
    return textArray.length;
}

/**
 * Determine the number of occurrences of a given word in a text passage.
 * @param {String} word 
 * @param {String} text 
 * @returns {Number} no of occurrences in text
 */
function numOfOccurrences(word, text) {
    const regex = new RegExp(word, 'gi');
    return text.match(regex).length;
}

/**
 * Determine number of occurrences for each word in a text passage
 * @param {String} text 
 * @returns {Object} word: no of instances
 */
function occurrencesOfWords(text) {
    const words = {};
    text.match(/[A-Za-z0-9]+/g).forEach((word) => 
        words[word] = (words[word] !== undefined) ?
            words[word] + 1 :
            1
    )
    return words;
}

/**
 * Determine positions of root in text
 * @param {String} root 
 * @param {String} text 
 * @returns {Number[]}
 */
function locateOccurrences(root, text) {
    const regex = new RegExp(root, "i");
    return text.match(/[A-Za-z0-9]+/g).reduce((acc, val, i) => {
        if (regex.test(val))
            acc.push(i)
    }, []);
}

/**
 * Create a new string from text without profanities
 * @param {String} text 
 * @returns {String} text without profanities
 */
function removeProfanities(text) {
    const regex = new RegExp(['zoinks', 'muppeteer', 'biffaroni', 'loopdaloop'].join('|'), "i")
    return text.replace(regex, '');
}

/**
 * Construct string of inner html for list
 * 
 * @param {Object} obj : data
 * @returns {String} inner html for list element
 */
function createListItems(obj) {
    let innerHtml = '';
    Object.keys(obj).forEach((key) => {
        innerHtml += `<li>${key}: ${obj[key]}</li>`
    });
    return innerHtml;
}

/*
    Test 1: If passage is empty
    Test 2: If passage
    Test 2: If passage has words to remove
    Test 3: If passage has words to bold
*/
function createPassage(obj) {
    return;
}

/** UI LOGIC
 * Functionality
 * - collect inputs
 *   required: text
 *   optional: word, bold
 * - display data findings
 */

/**
 * Collect data from form element and create references to process data
 */
function handleFormSubmission() {
    const data = form.target;
    console.log(data);
}

/**
 * Display data results
 */
function displayResults() { }

// Event listeners

window.onload = () => {
    /** VARIABLES
     * Data
     * - {Object} textData
     *   Contains all data produced from processing text passage
     * - {HTMLFormObject} form
     *   Contains reference to form element
     * - {Object} display
     *   Contains reference to display elements
     * 
     * Note: Cannot declare const variables outside
     */

    const textData = {};
    const form = document.querySelector('form');
    const display = {
        totalSentence: document.querySelector('#totalSentence'),
        totalWord: document.querySelector('#totalWord'),
        totalSelected: document.querySelector('#total-selected'),
        totalOccurrences: document.querySelector('#total-occurrences'),
        passage: document.querySelector('#passage')
    }

    form.addEventListener('submit', handleFormSubmission);
}