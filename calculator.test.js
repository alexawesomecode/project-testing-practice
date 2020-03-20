import calculator from './calculator';

test('check calculator returns correctly', () => {
  expect(calculator().add(23,54,67,87,86)).toBe(317);
  expect(calculator().add(23,54,67,87,86)).not.toBe(97);
  expect(calculator().mul(34,999,354)).toBe(12023964);
  expect(calculator().mul(34,999,354)).not.toBe(904838);
  expect(calculator().div(64,98,16273)).toBe(0.00004013158142258931);
  expect(calculator().div(64,98,16273)).not.toBe(0.900);
  expect(calculator().sub(89,564,382,837)).toBe(-1694);
  expect(calculator().sub(89,564,382,837)).not.toBe(1694);
})