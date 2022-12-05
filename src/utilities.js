export function toTitleCase(words) {
  // lowercase the param string and split on each word (space)
  return words
    .toLowerCase()
    .split(" ")
    .map((word) => {
      // uppercase the first letter & append to the rest of the word
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" "); // rejoin what we split above before the mapping
}

export function toKebabCase(words) {
  return words
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .join("-")
    .toLowerCase();
}
