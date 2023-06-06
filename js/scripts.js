/** BUSINESS LOGIC
 * Functionality:
 * - count number of words in text passage
 * - count number of sentences in text passage
 * - count number of instances of word in text passage
 * - find positions of phrase, word or part of word in text passage
 * 
 * Functionality:
 * - Omit offensive words from text passage
 * Ex.
 * storage: ['zoinks', 'muppeteer', 'biffaroni', 'loopdaloop']
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
    return;
}

/**
 * Determine how many words are in a text passage
 * @param {String} text 
 * @returns {Number} no of words in text
 */
function wordCounter(text) {
    return;
}

/**
 * Determine the number of sentences in a text passage
 * @param {String} text 
 * @returns {Number} 
 */
function sentenceCounter(text) {
    return;
}

/**
 * Determine the number of occurrences of a given word in a text passage.
 * @param {String} word 
 * @param {String} text 
 * @returns {Number} no of occurrences in text
 */
function numOfOccurrences(word, text) {
    return;
}

/**
 * Determine number of occurrences for each word in a text passage
 * @param {String} text 
 * @returns {Object} word: no of instances
 */
function occurrencesOfWords(text) {
    return;
}

/**
 * Determine positions of root in text
 * @param {String} root 
 * @param {String} text 
 * @returns {Number[]}
 */
function locateOccurrences(root, text) {
    return;
}

/**
 * Construct string of inner html for displaying passage
 * @returns {String} inner html
 */
function constructInnerHTML() {
    return;
}

/** VARIABLES
 * Data
 * - {Object} textData
 *   Contains all data produced from processing text passage
 * - {HTMLFormObject} form
 *   Contains reference to form element
 * - {Object} display
 *   Contains reference to display elements
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
function handleFormSubmission() { }

/**
 * Display data results
 */
function displayResults() { }

// Event listeners

window.onload = () => {
    form.addEventListener('submit', handleFormSubmission);
}