const cipher = (str, shift) => {
  let caps = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26
  };
  let arr = [];
  let alps = Object.keys(caps);
  const encrypt = (str1) => {
    if (str1.length < 1) {
      return undefined
    }
    for (let el in str1) {
      let temp = str1[el].toUpperCase();
      let newStr = str1[el].toLowerCase();
      if (!caps[newStr]) {
        return undefined;
      }
      let alpPos = caps[newStr] + shift - 1;
      if (alpPos > 25) alpPos = alpPos - 25 - 1;
      if (temp === str1[el]) {
        arr.push(alps[alpPos].toUpperCase());
      } else {
        arr.push(alps[alpPos]);
      }
    }
    return arr.join("");
  }
  if (/\s/.test(str)) {
    let newArr = [];
    let arr1 = str.split(' ');
    arr1.forEach(str => {
      newArr.push(encrypt(str))
      arr = []
    })
    return newArr.join(' ');
  } else {
    return encrypt(str)
  }
};

export default cipher;