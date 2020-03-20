import cipher from './ceaser_cipher'

test('encrypt letters by shifting', () => {
  expect(cipher('hello', 5)).toBe('mjqqt')
  expect(cipher('hellz', 5)).toBe('mjqqe')
  expect(cipher('hellZ', 5)).toBe('mjqqE')
  expect(cipher('helloworld', 15)).toBe('wtaadldgas')
  expect(cipher('qwertyuiop', 5)).toBe('vbjwydzntu')
  expect(cipher('qwErtYuIoP', 5)).toBe('vbJwyDzNtU')
  expect(cipher('qwErtYu*%^', 10)).toBeUndefined();
  expect(cipher('hello world', 15)).toBe('wtaad ldgas');
})