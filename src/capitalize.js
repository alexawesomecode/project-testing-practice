const capitalize = (str) => {
  const letters = str.split('');
  const firstLetter = letters.shift();

  letters.unshift(firstLetter.toUpperCase());
  return letters.join('');
};


export default capitalize;
