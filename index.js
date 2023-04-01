const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

/*no arguments, using tutorials, capitalize the first letter of each word.
  .map(break array of strings into an array of words we can iterate over (one by one))
  from there, modify first letter of each word (methods?) iterate over word into letters
  return letters => word => string => array
  modified letters + original words (-original first character)
  join
*/

const titleCased = () => {
  return tutorials.map(stringToWord => {
    return stringToWord.split(" ")
    .map(wordToCapital => wordToCapital.charAt(0).toUpperCase() + wordToCapital.slice(1))
    .join(" ")
  })
}
