const stringOutput = 'Hello this is from app.js';

if (typeof module !== 'undefined') {
  module.exports = stringOutput;
} else {
  alert("hello world");
  document.getElementById("root").innerHTML = stringOutput;
}