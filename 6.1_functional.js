let states = ["Kanas", "Nebraska","NOrth Dakota", "South Dakota"];

//URLS: Imperative Version
// function imperativeUrls(elements) {
//     let urls = [];
//     elements.forEach(function(element) {
//         urls.push(element.toLowercase().split(/\s+/).join("_"));
//     });
//     return urls;
// }
// console.log(imperativeUrls(states));

// urls: Functional version
function functionalUrls(elements) {
  return elements.map(element => element.toLowerCase().split(/\s+/).join('-'));
}
console.log(functionalUrls(states));