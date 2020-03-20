const calculator = () => {
  const check = (...num) => {
    const [numb] = num;
    for (const el of numb) {
      if (typeof el !== 'number') {
        return false;
      }
    }
    return '';
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
    add,
  };
};


export default calculator;
