import Validator from '../Validator';

test.each([
  ['neondoll', true],
  ['NeonDoll', true],
  ['ne0nd0ll', true],
  ['neon-doll', true],
  ['neon_doll', true],
  ['неондолл', false],
  ['ne()ndoll', false],
  ['0neondoll', false],
  ['neondo11', false],
  ['-neondoll', false],
  ['neondoll-', false],
  ['_neondoll', false],
  ['neondoll_', false],
  ['neon04-05doll', true],
  ['neon2000doll', false],
  ['neon666doll', true],
  ['neond01l', true],
  ['n90ndoll', true],
])('Testing validateUsername function with %s attribute', (username, expected) => {
  const validator = new Validator(username);

  const result = validator.validateUsername();

  expect(result).toBe(expected);
});
