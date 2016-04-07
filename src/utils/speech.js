module.exports = {
  discard(phrase) {
    let discard = /\b(where|where\'s|would|is|in|it|are|all|the|a|those|this|at|be|located|store|here|near|me|can|i|find|search|look|for)\b/i;
    let searchTerm = phrase.split(' ').filter(function(word){
      return !discard.test(word);
    });
    return searchTerm;
  }
};
