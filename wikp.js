import request from "request";
let url = process.argv[2];

import jsdom from "jsdom";
const { JSDOM } = jsdom;

request(url, function(error, response, body) {
    let { document } = (new JSDOM(body)).window;
});

let paragraphs = document.querySelectorAll("p");
let references = document.querySelectorAll(".reference");

// Remove any references.
  references.forEach(function(reference) {
    reference.remove();
  });

  // Print out all of the paragraphs.
  paragraphs.forEach(function(paragraph) {
    console.log(paragraph.textContent);
  });
});

console.log(url);