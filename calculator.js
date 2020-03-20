const calculator = () => {
  const check = (...num) => {
    num = num[0]
    for (let el of num) {
      if (isNaN(el) === true) {
        return false;
      }
    }
  };
  const add = (...num) => {
    if (check(num) === false) {
      return undefined;
    }
    return [...num].reduce((prev, curr) => prev + curr);
  };
  const mul = (...num) => {
    if (check(num) === false) {
      return undefined;
    }
    return [...num].reduce((prev, curr) => prev * curr);
  };
  const div = (...num) => {
    if (check(num) === false) {
      return undefined;
    }
    return [...num].reduce((prev, curr) => prev / curr);
  };
  const sub = (...num) => {
    if (check(num) === false) {
      return undefined;
    }
    return [...num].reduce((prev, curr) => prev - curr);
  };

  return {
    mul,
    div,
    sub,
    add
  };
};



;
export default calculator;
