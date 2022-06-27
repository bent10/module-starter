import test from 'ava'
import { fooFn } from '../dist/index.js'

test('foo should be 3', t => {
  const foo = fooFn(1, 2)
  t.assert(foo === 3)
})
