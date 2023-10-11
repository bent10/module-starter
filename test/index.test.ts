/// <reference types="vitest/globals" />

import foo from '../src/index.js'

it('should call foo', () => {
  expect(foo('world')).toBe('Hello world!')
})
