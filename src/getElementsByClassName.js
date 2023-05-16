// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, root = document.body
) {
  var elements = [];

  // base case
  if (root.className && root.classList.contains(className)) {
    elements.push(root);
  }

  // OSS
  root.childNodes.forEach(function (child) {
    elements = elements.concat(getElementsByClassName(className, child));
  });
  console.log(elements);
  return elements;
};
