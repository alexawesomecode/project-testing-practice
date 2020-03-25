import capitalize from '../src/capitalize';

test('return first letter capitalized', () => {
  expect(capitalize('alejandro')).toBe('Alejandro');
  expect(capitalize('michgolden')).toBe('Michgolden');
});
