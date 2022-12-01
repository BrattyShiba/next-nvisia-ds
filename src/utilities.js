export function toTitleCase(words) {
  // lowercase the param string and split on each word (space)
  return words.toLowerCase().split(" ").map((word) => {
      // uppercase the first letter & append to the rest of the word
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }
  ).join(" "); // rejoin what we split above before the mapping
}