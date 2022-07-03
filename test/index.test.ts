import { fooFn } from '../dist/index.js'

test('foo should be 3', () => {
  expect(fooFn(1, 2)).toBe(3)
})
