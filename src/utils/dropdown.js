export const getLongestString = (strings) => {
  return strings.reduce((a, b) => {
    return a.length > b.length ? a : b;
  });
};
