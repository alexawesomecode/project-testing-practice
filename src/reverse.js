const reverseString = (str) => {
  const reversed = str.split('');
  const result = reversed.reverse();
  return result.join('');
};

export default reverseString;
